<template>
  <v-app>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="author"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <!-- <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"

            label="Last name"
            required
          ></v-text-field>
        </v-col> -->

        <!-- <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col> -->
      </v-row>
    </v-container>
  </v-form>
  <p>{{author }}</p>
  </v-app>
  
</template>

<script>


export default {
  name: 'App',
  computed : {
    author : {
      get() {
        return this.$store.state.author
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },

  components: {
    
  },

  data: () => ({
    name : ""
  }),
  methods : {

  }
};
</script>
