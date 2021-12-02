<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
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
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-container fluid>
                <v-row align="center">
                  <v-col cols="4">
                    <v-text-field
                      v-model="postData.author"
                      label="Authorenname"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-select
                      :items="cathegories"
                      label="Kategorie"
                      v-model="postData.cathegory"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-textarea
                    outlined
                    auto-grow
                    v-model="postData.content"
                  ></v-textarea>
                </v-row>
                <v-btn @click="updateMessage">submit</v-btn>
              </v-container>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      cathegories: ["Politik", "Natur", "Aktuell", "Umwelt"],
      dateOptions: { year: "numeric", month: "long", day: "numeric" },
      postData: {
        author: "",
        cathegory: "",
        date: new Date(),
        content: "",
        id: "",
      },
    };
  },
  methods: {
    setPostId() {
      this.postData.id =
        this.postData.author.slice(0, 1) +
        this.postData.author.slice(-1) +
        Date.now();
    },
    setDate() {
      this.postData.date = this.postData.date.toLocaleDateString(
        undefined,
        this.dateOptions
      );
    },
    updateMessage() {
      this.setPostId();
      this.setDate();
      const finalData = { ...this.postData };
      this.$store.dispatch("updateMessage", finalData);
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
