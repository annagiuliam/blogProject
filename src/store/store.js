import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    posts: [],
    categories: ["Politik", "Natur", "Aktuell", "Umwelt"],
    filters: null,
  },
  actions: {
    updateMessage: ({ commit }, payload) => {
      commit("updateMessage", payload);
    },
    deletePost: ({ commit }, payload) => {
      commit("deletePost", payload);
    },
    editPost: ({ commit }, payload) => {
      commit("editPost", payload);
    },
  },
  mutations: {
    updateMessage: (state, payload) => {
      state.posts.push(payload);
    },
    deletePost: (state, payload) => {
      let filteredPosts = state.posts.filter((ele) => ele.id !== payload.id);
      state.posts = [...filteredPosts];
    },
    editPost: (state, payload) => {
      let newPost = { ...payload };
      let index = state.posts.findIndex((post) => post.id === payload.id);
      state.posts.splice(index, 1, newPost);
    },
  },
});
