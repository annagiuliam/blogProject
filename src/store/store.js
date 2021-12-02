import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    posts: [],
  },
  actions: {
    updateMessage: ({ commit }, payload) => {
      // console.log(payload)
      commit("updateMessage", payload);
    },
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.posts.push(payload);
      console.log(state.posts);
    },
  },
});
