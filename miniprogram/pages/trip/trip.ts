Page({
	data: {
    currentTripPlan: {
      status: 'plan',
      planSpecification: {
        departureLocation: {
          latitude: 40.040415,
          longitude: 116.273511
        },
        arrivalLocation: {
          latitude: 40.040415,
          longitude: 116.273511
        }
      }
    },
    numberValue: 1,
    timeRanges: [
      { value: "09:00-10:00", display: "上午 09:00 - 10:00" },
      { value: "10:00-11:00", display: "上午 10:00 - 11:00" },
      { value: "11:00-12:00", display: "上午 11:00 - 12:00" },
      { value: "12:00-13:00", display: "中午 12:00 - 13:00" }
    ],
    selectedTimeRange: { value: "09:00-10:00", display: "上午 09:00 - 10:00" }
  },
  
  handleNumberChange(event:any){
      this.setData({numberValue:event.detail.value})
  },

  handleTripPlanCreated(event:any){
    this.setData({currentTripPlan: event.detail});
  },

	onLoad: function () {
  
  },
  
  
});
