App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
      },
    });
    
    // 登入操作
    // wx.login({
    //   success(res) {
    //     // 获取code
    //     const code = res.code;

    //     // 将code发送给自己的服务器
    //     wx.request({
    //       url: "http://106.54.54.237:3000/api/h8/login",
    //       method: 'post',
    //       data: {
    //         code
    //       },
    //       success(res) {
    //         console.log(res)
    //       }
    //     })
    //   }
    // })

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
