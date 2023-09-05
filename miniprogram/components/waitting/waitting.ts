import StompClient from  '../../utils/stomp_client';

interface WaittingData{
  stompClient: StompClient|null;
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: <WaittingData>{
    stompClient: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initStomp() {
      try {
        this.data.stompClient = new StompClient();
        await this.data.stompClient.open('user', 'pass');
        
        this.data.stompClient.subscribe('/user/queue/status', (message) => {
          console.log('Received message from /user/queue/status:', message.body);
        });

        this.data.stompClient.subscribe('/topic/greetings', (message) => {
          console.log('Received message from /topic/greetings:', message.body);
        });

        this.data.stompClient.send("/app/hello", {}, JSON.stringify({ 'name': 'AAA' }));
      } catch (error) {
        console.error("Error connecting to Stomp:", error);
      }
    },
    closeStomp() {
      this.data.stompClient.close();
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
