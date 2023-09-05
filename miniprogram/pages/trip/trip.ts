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
  },
  
  handleTripPlanCreated(event:any){
    this.setData({currentTripPlan: event.detail});
  },

  handleTripPlanJoined(event:any){
    this.setData({currentTripPlan: event.detail})
  },

	onLoad: function () {
  
  },
});
