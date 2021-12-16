import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    currentPost: null,
    posts: [],
    categories: ["Politik", "Natur", "Aktuell", "Umwelt"],
    filters: null,
    postDialog: false,
    inputDialog: false,
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
      state.currentPost = { ...payload };
      console.log(state.currentPost);
    },
    openPostDialog: (state) => {
      state.postDialog = true;

      console.log(state.postDialog);
    },
    closePostDialog: (state) => {
      state.postDialog = false;
      console.log(state.postDialog);
      // this.clearCurrentPost();
    },
    openInputDialog: (state) => {
      state.inputDialog = true;

      console.log(state.inputDialog);
    },
    closeInputDialog: (state) => {
      state.inputDialog = false;
      console.log(state.inputDialog);
    },
    clearCurrentPost: (state) => {
      // if (state.currentPost) {
      //   Object.keys(state.currentPost).forEach(
      //     (ele) => (state.currentPost[ele] = "")
      //   );
      //   console.log(state.currentPost);
      // }
      state.currentPost = null;
      console.log(state.currentPost);
    },
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
    openPostDialog: ({ commit }) => {
      commit("openPostDialog");
    },
    closePostDialog: ({ commit }) => {
      commit("closePostDialog");
    },
    openInputDialog: ({ commit }) => {
      commit("openInputDialog");
    },
    closeInputDialog: ({ commit }) => {
      commit("closeInputDialog");
    },
    clearCurrentPost: ({ commit }) => {
      commit("clearCurrentPost");
    },
  },
});
