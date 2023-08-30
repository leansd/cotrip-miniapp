Component({
  properties: {
  },

  data: {
    cityList: [{"name": '上海'}], // 城市列表
    addressList: [{"name": "上海虹桥客运西站",
                    "address":"上海市闵行区申虹路298号",
                    "latitude":34,
                    "longtitude": 120},
                    {"name": "上海虹桥站",
                    "address":"上海市闵行区申贵路1500号",
                    "latitude":34,
                    "longtitude": 120}], // 地址条目列表
    selectedCity: {"name": '上海'}, // 选中的城市
    addressInput: "上海虹桥" // 地址输入框内容
  },

  methods: {
    handleCityChange(event:any) {
      const selectedIndex = event.detail.value;
      const selectedCity = this.data.cityList[selectedIndex];
      this.setData({
        selectedCity
      });
    },

    handleAddressInput(event:any) {
      const addressInput = event.detail.value;
      this.setData({
        addressInput
      });
      this.triggerEvent('addresschange', { address: addressInput });
    },

    handleCancel() {
      // 处理取消按钮点击事件
    }
  }
});
