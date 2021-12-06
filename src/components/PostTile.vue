<template>
  <v-card height="35vh">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-1">{{ post.cathegory }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ post.title }}
        </v-list-item-title>
        <v-row justify="space-between">
          <v-col>
            <v-list-item-subtitle>{{ post.author }}</v-list-item-subtitle>
          </v-col>
          <v-col>
            <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="elip">{{ post.content }}</v-card-text>
    <PostDialog v-bind:post="post" />
  </v-card>
</template>

<script>
import PostDialog from "./PostDialog.vue";
export default {
  name: "PostTile",
  props: ["post"],
  components: {
    PostDialog,
  },
};
</script>

<style>
.elip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
