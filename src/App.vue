<template>
  <v-app>
    <Dialog />
    <div v-if="posts.length > 0">
      <Filters @updateFilters="updateFilters" />
    </div>
    <v-container>
      <v-row v-if="posts.length === 0" justify="center">
        <h1>Es gibt noch keine Blogbeiträge</h1>
      </v-row>
      <v-row wrap>
        <v-col s="6" md="4" v-for="post in posts" :key="post.id">
          <post-tile v-bind:post="post"></post-tile>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Dialog from "./components/Dialog.vue";
import PostTile from "./components/PostTile.vue";
import Filters from "./components/Filters.vue";
export default {
  name: "App",
  data() {
    return {
      showInputModal: false,
      filters: null,
    };
  },
  components: {
    Dialog,
    Filters,
    "post-tile": PostTile,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    updateFilters(finalFilters) {
      this.filters = { ...finalFilters };
      console.log(this.filters);
    },
    applyFilters: (state) => {
      let tempPosts = [...state.posts];
      if (state.filters.cathegory) {
        tempPosts = tempPosts.filter(
          (post) => post.cathegory === state.filters.cathegory
        );
      }
      state.filteredPosts = [...tempPosts];
      console.log(state.filteredPosts);
    },
  },
};
</script>
