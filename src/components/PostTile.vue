<template>
  <v-card>
    <!-- <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.author }}</v-card-subtitle> -->
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-1">{{ post.cathegory }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ post.title }}
        </v-list-item-title>
        <v-row justify="space-between" cols="6">
          <v-col>
            <v-list-item-subtitle>{{ post.author }}</v-list-item-subtitle>
          </v-col>
          <v-col>
            <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>{{ post.content }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PostTile",
  props: ["post"],
};
</script>

<style></style>
