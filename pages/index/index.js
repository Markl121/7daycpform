const app = getApp()
Page({
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
    var incPerson = parseInt(e.detail.value.fifteen)
    var incPatient = parseInt(e.detail.value.one)
    var incResp = parseInt(e.detail.value.two)
    var incKind = parseInt(e.detail.value.six) + parseInt(e.detail.value.fourteen)
    var incAgil = parseInt(e.detail.value.seven) + parseInt(e.detail.value.ten)

    switch (e.detail.value.three) {
      case 'a':
        incKind += 6
        break;
      case 'b':
        incPerson += 6
        break;
      case 'c':
        incPatient += 6
        break;
      case 'd':
        incAgil += 6
        break;
      case 'e':
        incResp += 6
        break;
      default:
        console.warn("no answer 3")
    }

    switch (e.detail.value.four) {
      case 'a':
        incPerson += 6
        break;
      case 'b':
        incAgil += 4
        break;
      case 'c':
        incKind += 4
        break;
      case 'd':
        incPatient += 4
        break;
      case 'e':
        incResp += 5
        break;
      default:
        console.warn("no answer 4")
    }

    switch (e.detail.value.five) {
      case 'a':
        incPatient += 5
        break;
      case 'b':
        incResp += 5
        break;
      case 'c':
        incKind += 5
        break;
      case 'd':
        incPerson += 5
        break;
      default:
        console.warn("no answer 5")
    }

    switch (e.detail.value.eight) {
      case 'a':
        incAgil += 6
        break;
      case 'b':
        incResp += 6
        break;
      case 'c':
        incPerson += 6
        break;
      case 'd':
        incKind += 6
        break;
      case 'e':
        incPatient += 6
        break;
      default:
        console.warn("no answer 8")
    }

    switch (e.detail.value.nine) {
      case 'a':
        incPerson += 5
        break;
      case 'b':
        incKind += 5
        break;
      case 'c':
        incResp += 5
        break;
      case 'd':
        incAgil += 5
        break;
      default:
        console.warn("no answer 9")
    }

    switch (e.detail.value.eleven) {
      case 'a':
        incPatient += 5
        break;
      case 'b':
        incResp += 5
        break;
      case 'c':
        incKind += 5
        break;
      case 'd':
        incPerson += 5
        break;
      default:
        console.warn("no answer 11")
    }

    switch (e.detail.value.twelve) {
      case 'a':
        incPatient += 5
        break;
      case 'b':
        incKind += 5
        break;
      case 'c':
        incResp += 5
        break;
      case 'd':
        incAgil += 5
        break;
      default:
        console.warn("no answer 12")
    }

    switch (e.detail.value.thirteen) {
      case 'a':
        incPatient += 5
        break;
      case 'b':
        incKind += 5
        break;
      case 'c':
        incPerson += 5
        break;
      case 'd':
        incResp += 5
        break;
      default:
        console.warn("no answer 13")
    }

    switch (e.detail.value.sixteen) {
      case 'a':
        incPatient += 5
        break;
      case 'b':
        incAgil += 5
        break;
      case 'c':
        incPerson += 5
        break;
      case 'd':
        incResp += 5
        break;
      default:
        console.warn("no answer 16")
    }

    app.globalData.patience = incPatient
    app.globalData.personality = incPerson
    app.globalData.responsiblility = incResp
    app.globalData.agility = incAgil
    app.globalData.kindness = incKind

    console.log(app.globalData.agility)
    console.log(app.globalData.patience)
    console.log(app.globalData.personality)
    console.log(app.globalData.kindness)
    console.log(app.globalData.responsibility)

    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  formReset: function(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },
  data: {
    motto: '爱情战斗值-战斗吧',
    description: '给出一个5个值的表格图片，将这五个图放了进去，每个指数是满分是15分（可以超分），最低每项是1分',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    male: false,
    patience: 0,
    responsiblility: 0,
    personality: 0,
    agility: 0,
    kindness: 0
  },
  //事件处理函数
  onLoad: function() {
    let that = this;
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    if (e.detail.userInfo.gender === 1) {
      this.setData({
        male: true
      })
    }
  },
  bindDateChangepk: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datepk: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  }
})