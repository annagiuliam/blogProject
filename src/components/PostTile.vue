<template>
  <v-card>
    <PostContent :post="post" :elip="elip" />
    <v-btn @click="openDialog('PostDialog')"> read </v-btn>
  </v-card>
</template>

<script>
import PostContent from "./PostContent.vue";
export default {
  name: "PostTile",
  props: ["post", "elip"],
  components: {
    PostContent,
  },
  methods: {
    updateCurrentPost() {
      this.$store.dispatch("updateCurrentPost", this.post);
    },
    openDialog(name) {
      this.updateCurrentPost();
      this.$store.dispatch("open", name);
    },
  },
};
</script>

<style></style>
