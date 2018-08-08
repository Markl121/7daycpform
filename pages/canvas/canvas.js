import util from '../../utils/util'

const app = getApp();

Page({
  data: {
    userInfo: {},
    userName: "",
    hasUserInfo: false,
    head_img: '../../bg.png',
    windowWidth: 0,
    windowHeight: 0,
    //contentHeight: 0,
    powerLevel: 293928,
    //footer: '',
    //offset: 0,
    //lineHeight: 30,
    pointArr: [],
    content: "喜欢吃饭的人"
  },

  onLoad: function(options) {
    let that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          //offset: (res.windowWidth - 300) / 2
        });
      }
    })

  },


  onShow: function() {
    this.getData()
  },

  getData: function() {
    let that = this;

    /*let i = 0;
    let lineNum = 1;
    let thinkStr = '';
    let thinkList = [];
    for (let item of that.data.content) {
      if (item === '\n') {
        thinkList.push(thinkStr);
        thinkList.push('a');
        i = 0;
        thinkStr = '';
        lineNum += 1;
      } else if (i === 15) {
        thinkList.push(thinkStr);
        i = 1;
        thinkStr = item;
        lineNum += 1;
      } else {
        thinkStr += item;
        i += 1;
      }
    }
    thinkList.push(thinkStr);
    that.setData({
      thinkList: thinkList
    });
    */
    wx.getUserInfo({ //获取微信用户信息
      success: function(res) {
        wx.downloadFile({

          url: res.userInfo.avatarUrl,

          success: function(res1) {

            //缓存头像图片
            that.setData({

              head_img: res1.tempFilePath,
              content: res.userInfo.nickName

            })
            that.createNewImg();
          },
          fail(err) {
            console.log(err)
          }
        })

      }
    });
    //that.createNewImg();
  },

  createNewImg: function() {
    let that = this;
    let ctx = wx.createCanvasContext('myCanvas');
    ctx.drawImage('../../bg.jpg', 0, 0, this.data.windowWidth * 0.8, this.data.windowWidth * 0.8 * 293 / 198);

    //let height = 100;

    that.drawFont(ctx, that.data.content);
    that.drawFont2(ctx, that.data.powerLevel);



    /* ctx.save();
     ctx.clip();*/
    ctx.drawImage(that.data.head_img,
      that.data.windowWidth * 0.08,
      that.data.windowWidth * 0.05,
      that.data.windowWidth * 0.23,
      that.data.windowWidth * 0.23);
    //ctx.restore();*/
    //that.drawLine(ctx, lineNum * that.data.lineHeight + 120);this.data.windowWidth*293/198
    //that.drawFont(ctx, that.data.footer, lineNum * that.data.lineHeight + 156);

    that.drawInnerShape(ctx,
      Math.round(that.data.windowWidth * 0.35),
      Math.round(that.data.windowWidth * 0.4),
      Math.round(that.data.windowWidth * 0.82),
      5,
      Math.round(that.data.windowWidth * 0.35 / 46));

    //var levelArray = new Array(4, 4, 4, 4, 4);
    //var levelArray = new Array(0, 0, 0, 0, 0);
    console.log(parseInt(app.globalData.patience))
    console.log(parseInt(app.globalData.kindness))
    console.log(parseInt(app.globalData.agility))
    console.log(parseInt(app.globalData.personality))
    console.log(parseInt(app.globalData.responsibility))
    var maxRad = 50;
    var levelArray = new Array(maxRad - app.globalData.patience,
      maxRad - parseInt(app.globalData.kindness),
      maxRad - parseInt(app.globalData.agility),
      maxRad - parseInt(app.globalData.personality),
      maxRad - parseInt(app.globalData.responsibility));

    that.drawCentRect(ctx, levelArray);


    ctx.draw();
  },

  drawSquare: function(ctx, height) {
    ctx.rect(0, 50, this.data.windowWidth, height);
    ctx.setFillStyle("#f5f6fd");
    ctx.fill()
  },

  drawFont: function(ctx, content) {
    ctx.setFontSize(26);
    ctx.setFillStyle("#9400ff");
    ctx.fillText(content, this.data.windowWidth * 0.39, this.data.windowWidth * 0.11);
  },
  drawFont2: function(ctx, content) {
    ctx.setFontSize(36);
    ctx.setFillStyle("#ff0000");
    ctx.fillText('234234', this.data.windowWidth * 0.45, this.data.windowWidth * 0.38);
  },

  drawLine: function(ctx, height) {
    ctx.beginPath();
    ctx.moveTo(this.data.offset, height);
    ctx.lineTo(this.data.windowWidth - this.data.offset, height);
    ctx.stroke('#eee');
    ctx.closePath();
  },

  drawShape: function(ctx, radius, x, y, lines) {

    if (lines < 3) {

      throw new Error("多边形边数不能小于3")

    }

    ctx.beginPath()

    var array = new Array(lines)

    for (var i = 0; i < lines; i++) {

      var hudu = 2 * Math.PI / lines * i;

      var innerX = x + radius * Math.sin(hudu)

      var innerY = y - radius * Math.cos(hudu)

      array[i] = {
        x: innerX,
        y: innerY
      }

      this.data.pointArr[i].push(array[i])

    }

    for (var i = 0; i < array.length; i++) {

      var obj = array[i]

      if (i == 0) {

        ctx.moveTo(obj.x, obj.y);

      } else {

        ctx.lineTo(obj.x, obj.y);

      }

    }

    //ctx.closePath()

    //ctx.stroke()

  },


  /**

  * ctx 画布

  * x  中心点x坐标

  * y  中心点y坐标

  * lines 多边形边的数量

  * innerPadding 每层半径距离

  */

  drawInnerShape: function(ctx, radius, x, y, lines, innerPadding) {

    for (var i = 0; i < lines; i++) { //dfsdfsf


      this.data.pointArr.push(new Array())


    }


    var num = radius / innerPadding;

    ctx.setStrokeStyle('')

    ctx.setLineWidth(1)


    for (var i = 0; i < num; i++) {

      this.drawShape(ctx, radius - i * innerPadding, x, y, lines)

    }

    var outArr = this.data.pointArr

    //绘制中心线

    //for (var i = 0; i < outArr.length; i++) {

    //var obj = outArr[i][0]

    //ctx.beginPath()

    //ctx.moveTo(x, y)

    //ctx.lineTo(obj.x, obj.y)

    //ctx.stroke()

    //}


  },

  /**

  * 绘制覆盖区域

  */

  drawCentRect: function(ctx, levelArr) {

    ctx.beginPath();

    ctx.setFillStyle('#04dff7');

    ctx.setGlobalAlpha(0.5);

    var arr = this.data.pointArr

    for (var i = 0; i < levelArr.length; i++) {

      var level = levelArr[i]

      var x = arr[i][level].x

      var y = arr[i][level].y

      if (i == 0) {

        ctx.moveTo(x, y)

      } else {

        ctx.lineTo(x, y)

      }
    }
    ctx.closePath()

    ctx.fill()
  },
  getImageInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      hasUserInfo: true
    });
  },
  savePic: function() {
    let that = this;

    console.log(that.userInfo)
    wx.canvasToTempFilePath({
      // x: 0,
      //y: 50,
      //width: that.data.windowWidth,
      //height: that.data.contentHeight,
      x: 0,
      y: 0,
      width: this.data.windowWidth * 0.8,
      height: this.data.windowWidth * 0.8 * 293 / 198,
      destWidth: this.data.windowWidth * 3,
      destHeight: this.data.windowWidth * 3 * 293 / 198,
      canvasId: 'myCanvas',
      success: function(res) {
        util.savePicToAlbum(res.tempFilePath)
      }
    })
  }
});