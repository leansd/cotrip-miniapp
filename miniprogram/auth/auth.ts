import { loginUrl, refreshUrl } from './api'

const userLogin = () => {
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
const getToken = (): string | undefined => {
  return wx.getStorageSync('userToken').access_token;
}

const requestToken = (code: string) => {
  wx.request({
    url: loginUrl,
    method: 'POST',
    data: {
      code: code
    },
    success(response) {
      if (response.data) {
        wx.setStorageSync('userToken', response.data);
        refreshToken();
      }
    },
    fail(err) {
      console.error('请求服务器失败:', err);
    }
  });
}


const refreshToken = () => {
  const tokens = wx.getStorageSync('userToken');
  if (!tokens) {
    return;
  }
  let REFRESH_INTERVAL = tokens.expires_in * 900;
  if (REFRESH_INTERVAL<4*60*1000) REFRESH_INTERVAL = 4*60*1000;
  setInterval(() => {
    console.log('start refresh token')
    wx.request({
      url: refreshUrl,
      method: 'POST',
      data: {
        refresh_token: tokens.refresh_token
      },
      success: (response) => {
        if (response.data) {
          wx.setStorageSync('userToken', response.data);
        }
      },
      fail: (error) => {
        console.error('Token refresh failed', error);
      }
    });
  }, REFRESH_INTERVAL);
}
export default {
  userLogin,
  getToken,
  refreshToken
};