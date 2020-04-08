// component/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认值',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnClick: function() {
      this.triggerEvent('bClick',{title: this.properties.title,name: 'Jaye',age: 25},{});
    },
  }
})
