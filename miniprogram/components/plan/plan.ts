// components/plan.ts
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
    showAddressSelector: true,
    currentAddress: 0, //0 - departure 1 - arrival
    numberValue: 1,
    departure:{"name": "虹桥火车站南出站",
    "latitude":31.19346,
    "longtitude": 121.32074},
    arrival:{"name": "东方明珠",
    "latitude":31.23958,
    "longtitude": 121.499763},
    timeRanges: [
      { value: "09:00-10:00", display: "上午 09:00 - 10:00" },
      { value: "10:00-11:00", display: "上午 10:00 - 11:00" },
      { value: "11:00-12:00", display: "上午 11:00 - 12:00" },
      { value: "12:00-13:00", display: "中午 12:00 - 13:00" }
    ],
    selectedTimeRange: { value: "09:00-10:00", display: "上午 09:00 - 10:00" }
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
    }

  }
})
