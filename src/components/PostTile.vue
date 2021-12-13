<template>
  <v-card>
    <PostContent :post="post" :elip="elip" />
    <PostDialog :post="post" v-if="elip" />
  </v-card>
</template>

<script>
import PostDialog from "./PostDialog.vue";
import PostContent from "./PostContent.vue";
export default {
  data() {
    return {
      dateOptions: { year: "numeric", month: "long", day: "numeric" },
    };
  },
  name: "PostTile",
  props: ["post", "elip"],
  components: {
    PostDialog,
    PostContent,
  },
};
</script>

<style></style>
