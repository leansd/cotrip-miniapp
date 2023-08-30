import {createTripPlanUrl} from '../../api/trip'
import {generateTimeSlots, formatTimeWithToday} from '../../utils/timeRange'
import {interceptor} from '../../modules/auth'

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showAddressSelector: false,
    currentAddress: 0, //0 - departure 1 - arrival
    numberSeats: 1,
    departure:{"name": "虹桥火车站南出站",
    "latitude":31.19346,
    "longtitude": 121.32074},
    arrival:{"name": "东方明珠",
    "latitude":31.23958,
    "longtitude": 121.499763},
    timeRanges: generateTimeSlots(),
    selectedTimeRange: generateTimeSlots()[0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleNumberChange(event: any) {
      this.setData({ numberValue: event.detail.value })
    },
    handleTimeChange(event:any){
      console.log(event)
      this.setData({
        selectedTimeRange: this.data.timeRanges[event.detail.value]
      })
    },
    showAddress(index:number){
      this.data.currentAddress=index;
      this.data.showAddressSelector=true;
    },
    createTripPlan(){
      console.log({
        planSpecification: {
          departureLocation: this.data.departure,
          arrivalLocation:this.data.arrival,
          plannedDepartureTime: this.data.selectedTimeRange,
          requiredSeats: this.data.numberSeats
        }
      });
      console.log(interceptor)
      wx.request({
        url: createTripPlanUrl,
        method: 'POST',
        header: {
          'user-id':'user-1'
        },
        data: {
          planSpecification: {
            departureLocation: this.data.departure,
            arrivalLocation:this.data.arrival,
            plannedDepartureTime: {
              start: formatTimeWithToday(this.data.selectedTimeRange.start),
              end: formatTimeWithToday(this.data.selectedTimeRange.end)
            },
            requiredSeats: this.data.numberSeats
          }
        },
        success(response){
            //
        },
        fail(err){
          console.error('创建出行计划失败',err)
        }
      });
    }

  }
})
