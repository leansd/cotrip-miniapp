import Auth from './modules/auth'

import {interceptor} from './modules/auth'
App({
  globalData: {},
  interceptor: interceptor,
  onLaunch() {
      Auth.userLogin();
  },

})