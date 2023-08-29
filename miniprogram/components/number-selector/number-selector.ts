Component({
  properties: {
    value: {
      type: Number,
      value: 1,
      observer(this: any, newVal: number) {
        this.setData({
          value: newVal
        });
      }
    },
    max: {
      type: Number,
      value: Number.MAX_SAFE_INTEGER
    },
    min: {
      type: Number,
      value: Number.MIN_SAFE_INTEGER
    }
  },

  data: {
    value: 1,
  },

  methods: {
    handleMinus(this: any) {
      if (this.data.value-1 >= this.data.min) {
        this.setData({
          value: this.data.value - 1
        });
        this.triggerEvent('change', { value: this.data.value });
      }
    },

    handlePlus(this: any) {
      if (this.data.value+1 <= this.data.max) {
        this.setData({
          value: this.data.value + 1
        });
        this.triggerEvent('change', { value: this.data.value });
      }
    }
  }
});
