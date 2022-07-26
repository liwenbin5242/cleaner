//index.js
//获取应用实例
var app = getApp();
Page({
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: "13837393378",
      success: function () {
        console.log("拨打电话成功！");
      },
      fail: function () {
        console.log("拨打电话失败！");
      },
    });
  },
  click: function (e) {
    wx.openLocation({
      latitude: 40.712917,
      longitude: 110.485931,
      scale: 18,
      name: "辉县市纯康环保服务中心",
      address: "辉县市北云门镇后凡城村纯康环保服务中心",
    });
  },
  onShareAppMessage: function () {
    return {
      title: "辉县市纯康环保服务中心",
      desc: "辉县市纯康环保服务中心",
      path: "/pages/index/index",
    };
  },
});
