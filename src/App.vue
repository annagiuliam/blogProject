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
        <v-col
          md="6"
          xs="12"
          s="12"
          v-for="post in filteredPosts"
          :key="post.id"
        >
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
    filteredPosts() {
      return this.filterPosts();
    },
  },
  methods: {
    updateFilters(finalFilters) {
      this.filters = { ...finalFilters };
      this.filterPosts();
    },
    filterPosts() {
      let tempPosts = [...this.posts];
      if (this.filters) {
        if (this.filters.category) {
          tempPosts = tempPosts.filter(
            (post) => post.category === this.filters.category
          );
        }
        if (this.filters.searchTerm) {
          tempPosts = tempPosts.filter((post) => {
            const searchPara = ["title", "author", "content"];
            return searchPara.some((para) =>
              post[para].includes(this.filters.searchTerm)
            );
          });
        }
        if (this.filters.date) {
          tempPosts.sort((a, b) => b.date - a.date);
        }
      }
      return tempPosts;
    },
  },
};
</script>
