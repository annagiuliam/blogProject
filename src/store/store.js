import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    posts: [],
    cathegories: ["Politik", "Natur", "Aktuell", "Umwelt"],
  },
  actions: {
    updateMessage: ({ commit }, payload) => {
      commit("updateMessage", payload);
    },
    deletePost: ({ commit }, payload) => {
      commit("deletePost", payload);
    },
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.posts.push(payload);
      console.log(state.posts);
    },
    deletePost: (state, payload) => {
      let filteredPosts = state.posts.filter((ele) => ele.id !== payload.id);
      state.posts = { ...filteredPosts };
      console.log(state.posts);
    },
  },
});
