import {loginUrl} from '../api/auth'

const userLogin = ()=>{
  wx.login({
    success: res => {
      if (res.code) {
        requestToken(res.code)
      } else {
        console.error('wx.login失败！' + res.errMsg);
      }
    }
  });
}  

const getToken = ():string|undefined=>{
  return wx.getStorageSync('userToken')
}

const requestToken = (code: string)=>{
  wx.request({
    url: loginUrl,
    method: 'POST',
    data: {
      code: code
    },
    success(response) {
      if (response.data) {
        const token = (response.data as any).token;
        wx.setStorageSync('userToken', token);
      }
    },
    fail(err) {
      console.error('请求服务器失败:', err);
    }
  });
}

export default {
  userLogin: userLogin,
  getToken: getToken,
};