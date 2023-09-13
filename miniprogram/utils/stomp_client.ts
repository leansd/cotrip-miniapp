import WebSocketAdapter from './ws_adapter'
var Stomp = require('./lib/stomp.orig');

Stomp.setInterval = function () { }
Stomp.clearInterval = function () { }

class StompClient {
  private client: any;
  private wsAdapter: any;

  constructor(url:string) {
      this.wsAdapter = new WebSocketAdapter(url, { 'user-id': 'user-id-1' });
      this.client = Stomp.over(this.wsAdapter);
  }

  open(): Promise<void> {
      return new Promise((resolve, reject) => {
          this.client.connect({}, resolve, reject);
      });
  }

  close() {
      if (this.client && this.client.connected) {
          this.client.disconnect();
      }
  }

  subscribe(destination: string, callback: Function) {
      this.client.subscribe(destination, callback);
  }

  send(destination: string, headers: object, body: string) {
      this.client.send(destination, headers, body);
  }
}

export default StompClient;