import request from '../../service/network';

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 自定义封装网络请求方法
    request({
      url: 'http://106.54.54.237:8000/api/h8/home/data',
      data: {
        type: 'pop',
        page: 1
      },
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });


    // 小程序原生方法（默认get请求）
    // wx.request({
    //   url: 'http://106.54.54.237:8000/api/h8/home/data',
    //   data: {
    //     type: 'pop',
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    // post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "post",
    //   data: {
    //     type: 'pop',
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
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