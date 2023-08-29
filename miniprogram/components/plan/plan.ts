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
    numberValue: 1,
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
    handleNumberChange(event:any){
      this.setData({numberValue:event.detail.value})
  }

  }
})
