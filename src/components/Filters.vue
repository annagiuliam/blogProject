<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="4">
        <v-select
          v-model="filters.category"
          @input="updateFilters"
          :items="categories"
          label="Nach Kategorie Sortieren"
          clearable
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          v-model="filters.searchTerm"
          @input="updateFilters"
          clearable
          label="Begriff Suchen"
          append-icon="mdi-search"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn text>
          <v-icon class="mr-2">mdi-calendar-month-outline</v-icon>
          Nach Datum Sortieren
        </v-btn>
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
  },
};
</script>

<style></style>
