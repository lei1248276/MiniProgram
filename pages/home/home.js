// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Jaye',
    list: [
      {name: 'zhangsan',age: 18},
      {name: 'lisi',age: 19},
      {name: 'wangwu',age: 20}],
    counter: 0,
    lists: []
  },
  increment() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrement() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // 获取点击按钮获取用户数据
  getUser(event) {
    console.log(event);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://106.54.54.237:8000/api/h8/recommend',
      method: "GET",
      success: (res) => {
        const data = res.data.data.list;
        // console.log(this)
        this.setData({
          lists: data
        })
        console.log(res);
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})