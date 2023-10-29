import StompClient from  '../../utils/stomp_client';
import { WebSocketMessage } from '../../types/ws'
import { TripPlanEvent } from '../../types/trip';
import {tripPlanNotificationUrl} from '../../api/trip/trip';
import {tripPlanUrl, tripRequest} from '../../api/trip/trip'
import {TripPlan} from '../../types/trip'


interface WaittingData{
  stompClient: StompClient|null;
}
Component({
  properties: {
    tripPlan: { 
      type: TripPlan, 
      value: null,
    },
  },

  data: <WaittingData>{
    stompClient: null,
  },

  methods: {
    async initStomp() {
      try {
        this.data.stompClient = new StompClient(tripPlanNotificationUrl);
        await this.data.stompClient.open();
        this.data.stompClient.subscribe('/user/queue/status', (message: WebSocketMessage) => {
          let event:TripPlanEvent = JSON.parse(message.body);
          this.triggerEvent('tripPlanJoined',event.data)
        });
      } catch (error) {
        console.error("Error connecting to Stomp:", error);
      }
    },
    closeStomp() {
      this.data.stompClient!.close();
    },
    cancelTripPlan(){
      const componentInstance = this;
      tripRequest({
        url: tripPlanUrl + this.data.tripPlan.id,
        method: 'DELETE',
        success(response){
          componentInstance.notifyTripPlanCanceled(response.data as TripPlan);
        },
        fail(err){
          console.error('取消出行计划失败',err)
        }
    });
    },
    notifyTripPlanCanceled(data:TripPlan){
      this.triggerEvent('tripPlanCanceled',data)
    },

    refreshTripPlanStatus(){
      const componentInstance = this;
      tripRequest({
        url: tripPlanUrl + this.data.tripPlan.id,
        method: 'GET',
        success(response){
          const plan = response.data as TripPlan;
          if (plan.status==='JOINED')
            componentInstance.triggerEvent('tripPlanJoined',plan)
        },
        fail(err){
          console.error('刷新出行计划状态',err)
        }
    });
    },
  },
  lifetimes: {
    attached() {
      this.initStomp();
      this.refreshTripPlanStatus();
    },
    detached() {
      this.closeStomp();
    }
  }
});
