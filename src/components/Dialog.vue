<template>
  <v-container>
    <v-row justify="center" width="80%">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="icon"
            class="ma-1"
            outlined
            fab
            color="indigo"
            x-small
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            v-else
            class="ma-2"
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
            <span class="text-h5">Neuer Beitrag</span>
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
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        :items="cathegories"
                        label="Kategorie"
                        v-model="postData.cathegory"
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="postData.title"
                        label="Titel"
                        required
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
      dialog: false,
      dateOptions: { year: "numeric", month: "long", day: "numeric" },
      postData: {
        author: "",
        cathegory: "",
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
    cathegories() {
      return this.$store.state.cathegories;
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
      let newDate = new Date();
      this.postData.date = newDate.toLocaleDateString(
        undefined,
        this.dateOptions
      );
    },
    updateMessage() {
      this.setPostId();
      this.setDate();
      const finalData = { ...this.postData };
      if (this.post) {
        this.$store.dispatch("editPost", this.post);
      } else {
        this.$store.dispatch("updateMessage", finalData);
      }

      this.dialog = false;
      this.$refs.form.reset();
    },
    closeInputModal() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
