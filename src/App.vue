/* eslint-disable prettier/prettier */
<template>
  <v-app>
    <Dialog />
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" xs12 sm12 md6 lg4 xl4>
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
