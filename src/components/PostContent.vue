<template>
  <v-container>
    <v-list-item three-line>
      <v-list-item-content>
        <v-row class="d-flex justify-space-between align-center">
          <v-col>
            <div class="text-overline mb-1">
              {{ post.category }}
            </div></v-col
          >
          <v-col class="d-flex justify-end align-center max-width">
            <v-btn
              outlined
              fab
              color="indigo"
              x-small
              @click="deletePost"
              class="mx-4"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <InputDialog :icon="true" :post="post" />

            <v-btn
              class="ma-2"
              outlined
              fab
              x-small
              color="indigo"
              @click="closeDialog"
              v-if="!elip"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-list-item-title class="text-h5 mb-1">
          {{ post.title }}
        </v-list-item-title>
        <v-row justify="space-between">
          <v-col>
            <v-list-item-subtitle>{{ post.author }}</v-list-item-subtitle>
          </v-col>
          <v-col>
            <v-list-item-subtitle>{{
              this.formattedDate
            }}</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-card-text :class="textClass">{{ post.content }}</v-card-text>
  </v-container>
</template>

<script>
import InputDialog from "./InputDialog.vue";
export default {
  components: {
    InputDialog,
  },
  name: "PostContent",
  props: ["post", "elip"],
  computed: {
    formattedDate() {
      return this.post.date.toLocaleDateString(undefined, this.dateOptions);
    },
    textClass() {
      let className = this.elip ? "text-elip" : "";
      return className;
    },
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post);
    },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.text-elip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.max-width {
  max-width: 150px;
}
</style>
