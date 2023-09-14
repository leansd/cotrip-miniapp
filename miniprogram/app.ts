import Auth from './api/auth/auth'

import {interceptor} from './api/auth/auth'
App({
  globalData: {},
  interceptor: interceptor,
  onLaunch() {
      Auth.userLogin();
  },

})