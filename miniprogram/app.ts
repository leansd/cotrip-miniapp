import Auth from './auth/auth'

import {interceptor} from './auth/auth'
App({
  globalData: {},
  interceptor: interceptor,
  onLaunch() {
      Auth.userLogin();
  },

})