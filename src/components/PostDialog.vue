<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="indigo" v-bind="attrs" v-on="on" class="mb-5">
          Lesen
        </v-btn>
      </template>
      <v-card>
        <PostContent :post="post" @close="closeDialog" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PostContent from "./PostContent.vue";
export default {
  data() {
    return {
      dialog: false,
    };
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
      this.dialog = false;
    },
  },
};
</script>

<style></style>
