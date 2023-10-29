import {tripPlanUrl, tripRequest} from '../../api/trip/trip'

Page({
  data: {
    tripPlans: [
      
    ],
    textDescription: '<b>说明：</b><br><br>本小程序是精益软件设计方法的演示程序，并非实际运行业务。<br>方法细节请参见《软件设计：从专业到卓越》', 
    imageSrc: '../../img/leanbook.png', 
    currentTab: 'trips'  // 默认选中
  },

  // 生命周期回调—监听页面加载
  onShow: function(options) {
    this.loadTripPlans()
  },

  switchTab(event) {
    this.setData({
      currentTab: event.currentTarget.dataset.tab
    });
  },

  loadTripPlans: function(){
    const componentInstance = this;
    tripRequest({
      url: tripPlanUrl,
      method: 'GET',
      data: {},
      success(response){
        componentInstance.setData({
          tripPlans: response.data
        });
      },
      fail(err){
        console.error('创建出行计划失败',err)
      }
    });
  }
  // ... 其他生命周期函数或自定义方法
});

