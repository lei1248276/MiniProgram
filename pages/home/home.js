// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 10,
    titles: ['衣服','鞋子','裤子'],
    currentIndex: 0,
  },
  input(res) {
    console.log(res);
  },
  numToFix(num) {
    return num.toFixed(2);
  },
  handleTouch1(e) {
    console.log(e);
  },
  handleClick(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
    })
  },
  handleBtnClick(e) {
    console.log('......')
    console.log(e)
  },
  // handleTouch2(e) {
  //   console.log(e);
  // },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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