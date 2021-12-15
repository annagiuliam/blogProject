<template>
  <div class="text-center">
    <v-dialog :value="dialog" width="500">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="indigo" v-bind="attrs" v-on="on" class="mb-5">
          Lesen
        </v-btn>
      </template> -->
      <v-card>
        <PostContent :post="currentPost" @close="closeDialog" />
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
      name: "PostDialog",
      // dialog: false,
    };
  },
  computed: {
    dialog() {
      return this.$store.state.open.includes(this.name);
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
    closeDialog() {
      console.log(this.name);
      this.dialog = false;
    },
  },
  created() {
    console.log(this.dialog);
    console.log(this.$store.state.open.includes(this.name));
    // if (this.$store.state.open.includes(this.name)) {
    //   this.dialog = true;
    // }
  },
  beforeDestroy() {
    console.log(this.dialog);
  },
};
</script>

<style></style>
