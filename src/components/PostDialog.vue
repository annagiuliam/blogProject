<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500" @click:outside="closePostDialog">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="indigo" v-bind="attrs" v-on="on" class="mb-5">
          Lesen
        </v-btn>
      </template> -->
      <v-card>
        <PostContent :post="currentPost" v-if="currentPost" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PostContent from "./PostContent.vue";
export default {
  name: "PostDialog",
  data() {
    return {
      // name: "PostDialog",
    };
  },
  computed: {
    dialog() {
      return this.$store.state.postDialog;
    },
    currentPost() {
      return this.$store.state.currentPost;
    },
  },
  components: {
    PostContent,
  },
  props: ["post"],
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post);
    },
    closePostDialog() {
      this.$store.dispatch("closePostDialog");
      this.$store.dispatch("clearCurrentPost");
    },
  },
};
</script>

<style></style>
