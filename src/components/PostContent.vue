<template>
  <v-container>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-1">{{ post.category }}</div>
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
export default {
  name: "PostContent",
  props: ["post", "elip"],
  computed: {
    formattedDate() {
      return this.post.date.toLocaleDateString(undefined, this.dateOptions);
    },
  },
};
</script>

<style></style>
