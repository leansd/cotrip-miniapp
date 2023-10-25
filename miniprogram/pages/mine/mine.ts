import {tripPlanUrl, tripRequest} from '../../api/trip/trip'

Page({
  data: {
    tripPlans: [
      {
        departureLocation: '起始地示例',
        arrivalLocation: '目的地示例',
        date: '日期示例',
        status: '状态示例',
      },
      // ... 更多 tripPlans 数据
    ],
    textDescription: '<b>说明：</b><br><br>本小程序是<b>精益软件设计</b>方法的演示程序，并非实际运行业务。<br>方法细节请参见《软件设计：从专业到卓越》', 
    imageSrc: '../../img/leanbook.png', 
  },

  // 生命周期回调—监听页面加载
  onLoad: function(options) {
    this.loadTripPlans()
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

