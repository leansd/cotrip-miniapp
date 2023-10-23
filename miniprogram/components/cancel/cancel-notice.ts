import {TripPlan} from '../../types/trip'

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
    // departure:{"name": "虹桥火车站南出站",
    // "latitude":31.19346,
    // "longtitude": 121.32074},
    // arrival:{"name": "东方明珠",
    // "latitude":31.23958,
    // "longtitude": 121.499763},
    // departureTime: '2023年8月21日 8:00-8:30'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCreateNewPlan(){

    }
  }
})
