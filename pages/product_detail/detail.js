// pages/product_detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:false,
    value:'你好hahhhhhhhhhhhhhhhhhhh我是杀杀杀尽快DHL卡上的卡结算的',
    name:'烤鸡',
    price:'￥95',
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
  tapShoppingCar: function(){
    wx.switchTab({
      url: '../shoppingcar/shoppingcar',
    })
  },
  tapLike: function(){
    var name=this.data.selected;
    if(true==name){
      this.setData({
        selected: false
      })
    }
    else  {
      this.setData({
        selected: true
      })
    }
  }
})