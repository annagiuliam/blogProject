<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-select
          v-model="filters.cathegory"
          :items="cathegories"
          label="Nach Kategorie Sortieren"
          @input="updateFilters"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: {
        cathegory: "",
        date: false,
        searchTerm: "",
      },
    };
  },
  computed: {
    cathegories() {
      return this.$store.state.cathegories;
    },
  },
  methods: {
    updateFilters() {
      const finalFilters = { ...this.filters };
      //   this.$store.dispatch("applyFilters", finalFilters);
      this.$emit("updateFilters", finalFilters);
    },
  },
};
</script>

<style></style>
