import {baseURL, env} from '../urlRoot'

function urlRoot(){
  if (env==='develop') return 'http://127.0.0.1:8848/auth/v1/';
  return baseURL+'/auth/v1/';
}
 
export const loginUrl = urlRoot()+'login';
export const refreshUrl = urlRoot()+'refresh-token';
