<template>
  <v-container class="auto-width">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="icon"
            outlined
            fab
            color="indigo"
            x-small
            v-bind="attrs"
            v-on="on"
            class="ma-2"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            v-else
            class="my-9 mx-auto"
            outlined
            color="indigo"
            v-bind="attrs"
            v-on="on"
          >
            Neuer Beitrag
          </v-btn>
        </template>

        <v-card min-height="90vh">
          <v-container>
            <v-row justify="end">
              <v-btn
                class="ma-2"
                outlined
                fab
                small
                color="indigo"
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>
          </v-container>

          <v-card-title>
            <span v-if="icon" class="text-h5">Beitrag Bearbeiten</span>
            <span v-else class="text-h5">Neuer Beitrag</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form">
                <v-container fluid>
                  <v-row align="center">
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="postData.author"
                        label="Authorenname"
                        required
                        :rules="inputRules"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        :items="categories"
                        label="Kategorie"
                        v-model="postData.category"
                        required
                        :rules="inputRules"
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="postData.title"
                        label="Titel"
                        required
                        :rules="inputRules"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-textarea
                      label="Inhalt"
                      outlined
                      auto-grow
                      v-model="postData.content"
                      row-height="40vh"
                      required
                      :rules="inputRules"
                    ></v-textarea>
                  </v-row>
                  <v-row justify="end">
                    <v-btn @click="updateMessage">Speichern</v-btn>
                  </v-row>
                </v-container>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      inputRules: [(v) => !!v || "Inhalt fehlt"],
      dialog: false,
      postData: {
        author: "",
        category: "",
        date: "",
        title: "",
        content: "",
        id: "",
      },
    };
  },
  created() {
    if (this.post) {
      this.postData = { ...this.post };
    }
  },
  props: ["icon", "post"],
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    setPostId() {
      this.postData.id =
        this.postData.author.slice(0, 1) +
        this.postData.author.slice(-1) +
        Date.now();
    },
    setDate() {
      this.postData.date = new Date();
    },
    updateMessage() {
      const formValid = this.$refs.form.validate();
      if (formValid) {
        this.setPostId();
        this.setDate();
        const finalData = { ...this.postData };
        if (this.post) {
          this.$store.dispatch("editPost", finalData);
        } else {
          this.$store.dispatch("updateMessage", finalData);
        }

        this.dialog = false;
        this.$refs.form.reset();
      }
    },
  },
};
</script>

<style>
.container.auto-width {
  width: auto;
}
</style>
