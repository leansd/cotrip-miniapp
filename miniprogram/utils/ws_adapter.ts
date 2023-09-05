export default class WebSocketAdapter {
  private socketOpen: boolean = false;
  private socketMsgQueue: string[] = [];
  
  public onopen: () => void = null;
  public onmessage: (event: any) => void = null;

  constructor(url: string, headers: any) {
    wx.connectSocket({
      url: url,
      header: headers
    });

    wx.onSocketOpen((res) => {
      console.log('WebSocket连接已打开！');
      this.socketOpen = true;
      for (let msg of this.socketMsgQueue) {
        this.sendSocketMessage(msg);
      }
      this.socketMsgQueue = [];
      this.onopen && this.onopen();
    });

    wx.onSocketMessage((res) => {
      console.log('收到onmessage事件:', res);
      this.onmessage && this.onmessage(res);
    });
  }

  send(msg: string) {
    if (this.socketOpen) {
      wx.sendSocketMessage({
        data: msg
      });
    } else {
      this.socketMsgQueue.push(msg);
    }
  }

  private sendSocketMessage(msg: string) {
    console.log('send msg:');
    console.log(msg);
    wx.sendSocketMessage({
      data: msg
    });
  }
}
