import WebSocketAdapter from  '../../utils/ws_adapter';
var Stomp = require('../../utils/lib/stomp.orig');

Stomp.setInterval = function () { }
Stomp.clearInterval = function () { }

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
      const wsAdapter = new WebSocketAdapter('ws://localhost:8081/notification', { 'user-id': 'user-id-1' });
      const client = Stomp.over(wsAdapter);

      client.connect('user', 'pass', (sessionId) => {
        console.log('sessionId', sessionId);

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

      // Store the client in the component's data for later use in the detached lifecycle
      this.setData({ stompClient: client });
    },
    closeStomp() {
      const client = this.data.stompClient;
      if (client && client.connected) {
        client.disconnect();
      }
    }
  },
  lifetimes: {
    attached() {
      this.initStomp();
    },
    detached() {
      this.closeStomp();
    }
  }
});
