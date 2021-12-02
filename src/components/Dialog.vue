/* eslint-disable prettier/prettier */
<template>
  <v-container mt-4>
    <v-row justify="center" width="80%">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2" outlined color="indigo" v-bind="attrs" v-on="on">
            Add New Post
          </v-btn>
        </template>
        <v-card>
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
