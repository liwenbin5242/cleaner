Page({
  //事件处理函数
  data: {
    imgalist1: [
      "https://pic2.zhimg.com/80/v2-2f8c404b30f288ed5d8a61c16751e681_720w.jpg",
    ],
    imgalist2: [
      "https://pic2.zhimg.com/80/v2-c9d2b9d547e9e4ccd604ffa77cddb311_720w.jpg",
    ],
    videolist: [
      "https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4",
    ],
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title,
    });
  },
  onShareAppMessage: function () {
    return {
      title: "辉县市纯康环保服务中心",
      desc: "专业家电清洗维修、去除甲醛",
      path: "/pages/index/index",
    };
  },
  previewImage: function (e) {
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
