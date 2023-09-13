import auth from '../auth/auth'

function urlRoot(){
  return 'https://api.leansd.cn/cotrip/plan/v1/';
}

export const createTripPlanUrl = urlRoot()+'trip-plans/';

export function tripRequest(options:any) {
  const authHeader = {
      'user-id': 'user-id-1',
      'Authorization': 'Bearer ' + auth.getToken()
  };

  const headers = Object.assign({}, authHeader, options.header);

  wx.request({
      ...options,
      header: headers
  });
}