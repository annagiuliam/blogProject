<template>
  <v-card>
    <PostContent :post="post" :elip="elip" />
    <PostDialog :post="post" v-if="elip" />
    <v-btn @click="updateCurrentPost">read</v-btn>
  </v-card>
</template>

<script>
import PostDialog from "./PostDialog.vue";
import PostContent from "./PostContent.vue";
export default {
  name: "PostTile",
  props: ["post", "elip"],
  components: {
    PostDialog,
    PostContent,
  },
  methods: {
    updateCurrentPost() {
      this.$store.dispatch("updateCurrentPost", this.post);
    },
  },
};
</script>

<style></style>
