//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    imgalist: [
      "https://pic3.zhimg.com/80/v2-b6fb159018f12476514d4393a964c952_720w.jpg",
      "https://pic2.zhimg.com/80/v2-2f8c404b30f288ed5d8a61c16751e681_720w.jpg",
      "https://pic3.zhimg.com/80/v2-2f7caebdbe7decbfba6b24b25f6a9a56_720w.jpg",
    ],
    imgainfo: [
      {
        src: "https://pic3.zhimg.com/80/v2-b6fb159018f12476514d4393a964c952_720w.jpg",
        name: "饮水设备清洗",
      },
      {
        src: "https://pic2.zhimg.com/80/v2-2f8c404b30f288ed5d8a61c16751e681_720w.jpg",
        name: "去除甲醛",
      },
      {
        src: "https://pic3.zhimg.com/80/v2-2f7caebdbe7decbfba6b24b25f6a9a56_720w.jpg",
        name: "家电油污清洗、管道清洗",
      },
    ],
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        "https://pic1.zhimg.com/80/v2-2d97cceb24c06dfec82f57a4e7c504b4_720w.jpg",
        "https://pic2.zhimg.com/80/v2-21bbb9c4eaceee8582d0ec020cff2595_720w.jpg",
        "https://pic2.zhimg.com/80/v2-21bbb9c4eaceee8582d0ec020cff2595_720w.jpg",
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
    },
    // nav
    index_index_navs_tmpl: {
      navs: [
        {
          image: "/image/i3.png",
          text: "管道清洗",
        },
        {
          image: "/image/i4.png",
          text: "甲醛治理",
        },
      ],
    },

    // item
    index_index_items_tmpl: {
      items: [
        { image: "/image/a1.jpg" },
        { image: "/image/a2.jpg" },
        { image: "/image/a3.jpg" },
      ],
    },
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: "../logs/logs",
    });
  },
  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log("onLoad");
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
      });
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
  //http://lbs.qq.com/tool/getpoint/ 坐标拾取器
  click: function (e) {
    wx.openLocation({
      latitude: 40.712917,
      longitude: 110.485931,
      scale: 18,
      name: "辉县市纯康环保服务中心",
      address: "辉县市纯康环保服务中心",
    });
  },
  onShareAppMessage: function () {
    return {
      title: "辉县市纯康环保服务中心",
      desc: "辉县市纯康环保服务中心",
      path: "/pages/index/index",
    };
  },
  previewImage: function (e) {
    console.log("=======  " + e.currentTarget.dataset.src);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: this.data.imgalist, // 需要预览的图片http链接列表
      success: function (res) {},
      fail: function (res) {},
      complete: function (res) {},
    });
  },
});
