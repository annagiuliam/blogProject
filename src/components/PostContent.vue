<template>
  <v-container>
    <v-list-item three-line>
      <v-list-item-content>
        <v-row justify="space-between" align="center">
          <v-col>
            <div class="text-overline mb-1">
              {{ post.category }}
            </div></v-col
          >
          <v-col cols="3" class="d-flex justify-space-around align-center">
            <v-btn
              class="ma-1"
              outlined
              fab
              color="indigo"
              x-small
              @click="deletePost"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <InputDialog :icon="true" :post="post" />
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
    <v-card-text class="elip">{{ post.content }}</v-card-text>
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
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post);
    },
  },
};
</script>

<style></style>
