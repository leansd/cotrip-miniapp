import auth from '../../api/auth/auth';
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
    imageSrc: 'path/to/your/image.jpg', // 请更换成你的图片路径
    textDescription: '这里是一些文字说明', // 文本框的说明文字
  },

  // 生命周期回调—监听页面加载
  onLoad: function(options) {
    // 页面创建时执行
    // 可以在这里做一些初始化工作，比如从服务器获取 tripPlans 数组
  },

  // ... 其他生命周期函数或自定义方法
});

