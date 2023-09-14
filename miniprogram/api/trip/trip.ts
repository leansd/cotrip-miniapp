import auth from '../auth/auth';
import {baseURL, webSocketURL} from '../urlRoot';

function urlRoot(){
  return baseURL + '/cotrip/plan/v1/';
}

export const createTripPlanUrl = urlRoot()+'trip-plans/';

export const tripPlanNotificationUrl = webSocketURL + '/notification';
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