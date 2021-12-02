/* eslint-disable prettier/prettier */
<template>
  <v-app>
    <Dialog />
    <v-container v-for="post in posts" :key="post.id">
      <v-card>
        <div>{{ post.author }}</div>
        <div>{{ post.cathegory }}</div>
        <div>{{ post.content }}</div>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Dialog from "./components/Dialog.vue";
export default {
  name: "App",
  data() {
    return {
      showInputModal: false,
    };
  },
  components: {
    Dialog,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
