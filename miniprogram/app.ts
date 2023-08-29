import Auth from './modules/auth'

App({
  globalData: {},
  onLaunch() {
      Auth.userLogin();
  },
})