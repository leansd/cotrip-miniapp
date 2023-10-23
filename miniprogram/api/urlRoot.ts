const accountInfo = wx.getAccountInfoSync();
export var env = accountInfo.miniProgram.envVersion;
env = 'release';
if(!env){
  console.error("获取运行环境失败!");
  env = "develop";
}

const baseApi = {
  develop: "http://127.0.0.1:8081",
  trial: "https://api.leansd.cn",
  release: "https://api.leansd.cn"
};

const baseWebSocket = {
  develop: "ws://127.0.0.1:8081",
  trial: "wss://api.leansd.cn",
  release: "wss://api.leansd.cn"
};

export const baseURL = baseApi[env];
export const webSocketURL = baseWebSocket[env];