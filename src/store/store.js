import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  currentPost: null,
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
    deleteAllPosts: ({ commit }) => {
      commit("deleteAllPosts");
    },
    updateCurrentPost: ({ commit }, payload) => {
      commit("updateCurrentPost", payload);
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
    deleteAllPosts: (state) => {
      state.posts = [];
    },
    updateCurrentPost: (state, payload) => {
      console.log(payload);
      state.currentPost = { ...payload };
      console.log(state.currentPost);
    },
  },
});
