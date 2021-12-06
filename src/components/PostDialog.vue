<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="indigo" v-bind="attrs" v-on="on"> Lesen </v-btn>
      </template>

      <v-card>
        <v-list-item three-line>
          <v-list-item-content>
            <v-row justify="space-between" align="center">
              <v-col>
                <div class="text-overline mb-1">
                  {{ post.cathegory }}
                </div></v-col
              >
              <v-col cols="3" class="d-flex justify-space-around">
                <v-btn class="ma-1" outlined fab color="indigo" x-small>
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
                 <v-btn class="ma-1" outlined fab color="indigo" x-small>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-list-item-title class="text-h5 mb-5">
              {{ post.title }}
            </v-list-item-title>
            <v-row justify="space-between" cols="6" class="mb-4">
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            color="indigo"
            text
            @click="dialog = false"
            class="mb-3"
          >
            Schließen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["post"],
};
</script>

<style></style>
