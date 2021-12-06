<template>
  <v-app>
    <Dialog />
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
export default {
  name: "App",
  data() {
    return {
      showInputModal: false,
    };
  },
  components: {
    Dialog,
    "post-tile": PostTile,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
