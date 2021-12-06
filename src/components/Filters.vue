<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-select
          :items="cathegories"
          label="Nach Kategorie Sortieren"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Filters",
  computed: {
    cathegories() {
      return this.$store.state.cathegories;
    },
  },
};
</script>

<style></style>
