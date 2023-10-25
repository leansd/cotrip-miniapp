Component({
  properties: {
  },


  data: {
    cityList: [{"name": '上海'}], // 城市列表
    addressList: [{"index": 0,
                    "name": "上海虹桥客运西站",
                    "address":"上海市闵行区申虹路298号",
                    "latitude":31.194301,
                    "longitude":121.317611},
                    {"index": 1,
                    "name": "虹桥火车站南出站",
                    "address":"上海市闵行区申贵路1500号",
                    "latitude":31.19346,
                    "longitude": 121.32074},
                    {"index": 2,
                    "name": "东方明珠",
                    "latitude":31.23958,
                    "longitude": 121.499763,
                    "address":"上海市浦东新区世纪大道1号"}],
    selectedCity: {"name": '上海'}, 
    addressInput: "上海虹桥" 
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

    handleAddressSelected(event: WechatMiniprogram.BaseEvent){
      console.log('address selected')
      this.triggerEvent('addressSelected',event.currentTarget.dataset.item);
    },
    handleCancel() {
      console.log('canceled selection')
      this.triggerEvent('cancel');
    }
  }
});
