// components/waitting/waitting.ts
//import Stomp from '../../utils/lib/stomp.orig';
const Stomp = require('../../utils/lib/stomp.orig');

var socketOpen = false
var socketMsgQueue = []
function sendSocketMessage(msg) {
    console.log('send msg:')
    console.log(msg);
    if (socketOpen) {
        wx.sendSocketMessage({
            data: msg
        })
    } else {
        socketMsgQueue.push(msg)
    }
}

/////////////////////////////////////////////////////
var ws = {
    send: sendSocketMessage,
    onopen: null,
    onmessage: null
}

wx.connectSocket({
  url: 'ws://localhost:8081/notification',
  header: {
    'user-id': 'user-id-1'
  }
})
wx.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！')

  socketOpen = true
  for (var i = 0; i < socketMsgQueue.length; i++) {
      sendSocketMessage(socketMsgQueue[i])
  }
  socketMsgQueue = []

  ws.onopen && ws.onopen()
})

wx.onSocketMessage(function (res) {
  console.log('收到onmessage事件:', res)
  ws.onmessage && ws.onmessage(res)
})

Stomp.setInterval = function () { }
Stomp.clearInterval = function () { }
var client = Stomp.over(ws);

var destination = '/topic/gre';
client.connect('user', 'pass', function (sessionId) {
    console.log('sessionId', sessionId)

    client.subscribe('/user/queue/status', (message) => {
      console.log('Received message from /user/queue/status:', message.body);
    });

    // Subscribe to /topic/greetings
    client.subscribe('/topic/greetings', (message) => {
      console.log('Received message from /topic/greetings:', message.body);
    });

    // Send a message to /app/hello
    client.send("/app/hello", {}, JSON.stringify({ 'name': 'AAA' }));

})
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    initStomp() {
      
    }
  },
  lifetimes: {
  attached() {
    this.initStomp();
  },
  detached() {
  }
}
})
