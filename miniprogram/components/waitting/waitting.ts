import StompClient from  '../../utils/stomp_client';
import { WebSocketMessage } from '../../types/ws'
import { TripPlanEvent } from '../../types/trip';
import {tripPlanNotificationUrl} from '../../api/trip/trip';
interface WaittingData{
  stompClient: StompClient|null;
}
Component({
  properties: {

  },

  data: <WaittingData>{
    stompClient: null
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
    }
  },
  lifetimes: {
    attached() {
      this.initStomp();
    },
    detached() {
      this.closeStomp();
    }
  }
});
