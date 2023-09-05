import WebSocketAdapter from  '../../utils/ws_adapter'
const wsAdapter = new WebSocketAdapter('ws://localhost:8081/notification', { 'user-id': 'user-id-1' });
var Stomp = require('../../utils/lib/stomp.orig');
Stomp.setInterval = function () { }
Stomp.clearInterval = function () { }
var client = Stomp.over(wsAdapter);

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
});

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
});
