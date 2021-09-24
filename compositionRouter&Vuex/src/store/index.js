import { createStore } from "vuex";

export default createStore({
  state: {
    showAbout: false,
  },
  getters: {
    showAbout: (state) => state.showAbout,
  },
  mutations: {
    setShowAbout(state, payload) {
      state.showAbout = payload;
    },
  },
  actions: {},
  modules: {},
});
