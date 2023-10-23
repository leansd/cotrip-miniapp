import { TripPlan } from '../../types/trip'

Component({
  properties: {
    tripPlan: {
      type: TripPlan,
      value: null,
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 组件的方法列表
   */

  methods: {
    newTripPlan() {
      this.data.tripPlan.status = 'new';
      console.log(this.data.tripPlan)
      this.triggerEvent('createNewPlan', this.data.tripPlan);
    },
  },
})
