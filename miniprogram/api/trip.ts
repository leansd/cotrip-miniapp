import auth from '../auth/auth'

function urlRoot(){
  return 'http://localhost:8081/';
}

export const createTripPlanUrl = urlRoot()+'trip-plan';

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