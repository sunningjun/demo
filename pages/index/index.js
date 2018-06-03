Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatordots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg'
    ],
    selectedmeat:false,
    selectedsea: false,
    selectedmilk: false,
  },

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

  },
  focus: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  clickOrder: function () {
    wx.switchTab({
      url: '../order/order',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clickCar: function () {
    wx.switchTab({
      url: '../shoppingcar/shoppingcar',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clickContact: function () {
    wx.navigateTo({
      url: '../milk/milk',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  clickMore: function (e) {
    var name = e.currentTarget.dataset;
    var that=this;
    console.log(e);

    if ('meat'==name.meat) {
      wx.navigateTo({
        url: '../meat/meat',
        complete: function (res) { that.touchMove()},
      })
    }
    else if ('seafood'==name.seafood) {
      wx.navigateTo({
        url: '../seafood/seafood',
        complete: function (res) { that.touchMove() },
      })
    }
    else if ('milk' == name.milk) {
      wx.navigateTo({
        url: '../milk/milk',
        complete: function (res) { that.touchMove() },
      })
    }
  },
  touchStart:function(e){
    var name = e.currentTarget.dataset;
    if('meat'==name.meat){
      this.setData({
        selectedmeat: true
      })
    }
    else if ('seafood' == name.seafood) {
      this.setData({
        selectedsea: true
      })
    }
    else if ('milk' == name.milk) {
      this.setData({
        selectedmilk: true
      })
    }
   
  },
  touchMove:function(){
    this.setData({
      selectedmeat: false,
      selectedsea: false,
      selectedmilk: false,
    })
  }
})