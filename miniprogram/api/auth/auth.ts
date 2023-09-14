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
      if (response.statusCode===200 && response.data) {
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
  let REFRESH_INTERVAL = wx.getStorageSync('userToken').expires_in * 900;
  if (REFRESH_INTERVAL < 4 * 60 * 1000) REFRESH_INTERVAL = 4 * 60 * 1000;

  const maxFailedTime = 3; // 设置最大失败次数，例如3次
  let failedTime = 0;

  const refreshTokenInterval = setInterval(() => {
    console.log('start refresh token');
    const currentTokens = wx.getStorageSync('userToken'); // 从存储中重新获取tokens
    if (!currentTokens) {
      clearInterval(refreshTokenInterval); // 如果没有token，停止定时器
      return;
    }
    wx.request({
      url: refreshUrl,
      method: 'POST',
      data: {
        refresh_token: currentTokens.refresh_token // 使用最新的refresh_token
      },
      success: (response) => {
        if (response.data) {
          wx.setStorageSync('userToken', response.data);
        }
      },
      fail: (error) => {
        console.error('Token refresh failed', error);
        failedTime++;
        if (failedTime >= maxFailedTime) {
          clearInterval(refreshTokenInterval); // 停止定时器
          console.log('Stopped token refresh due to maximum failed attempts');
        }
      }
    });
  }, REFRESH_INTERVAL);
}

export default {
  userLogin,
  getToken,
  refreshToken
};
