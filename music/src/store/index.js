import { createStore } from 'vuex';
// import player from './modules/player';
// import auth from './modules/auth';
import modules from './modules';
export default createStore({
  modules,
  // modules: {
  //   auth,
  //   player,
  // },
  getters: {
    //authModalShow: state => state.authModalShow
  },
});
