<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="d-flex align-center">
        <v-select
          v-model="filters.category"
          :items="categories"
          label="Nach Kategorie Sortieren"
          @input="updateFilters"
          clearable
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
        category: "",
        date: false,
        searchTerm: "",
      },
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    updateFilters() {
      const finalFilters = { ...this.filters };
      this.$emit("updateFilters", finalFilters);
    },
    deleteCategory() {},
  },
};
</script>

<style></style>
