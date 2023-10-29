import {tripPlanUrl, tripRequest} from '../../api/trip/trip'

Page({
  data: {
    tripPlans: [
      
    ],
    textDescription: '<b>这是一个演示程序，并非实际运行业务。</b>\
    <br>它是“共享出行”演示项目的微信小程序前端。 \
    <br>“共享出行”演示项目面向一线开发者和架构师，体现了: \
    <li>- 领域驱动设计的战术模式和战略模式</li> \
    <li>- 精益软件设计框架，包括了： \
    精益需求分析、由外而内、测试先行、演进式设计等实践。</li>\
    <li> - 持续集成和云原生部署 </li> \
    <hr>项目采用Affero GPL许可证 \
    <br>精益软件设计请参阅《软件设计：从专业到卓越》\
    <br>网站链接： \
    <li> - https://gitee.com/leansd \
    <li> - https://www.leansd.cn', 
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

