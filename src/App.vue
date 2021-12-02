<template>
  <v-app>
   <input-modal></input-modal>
  <v-container v-for="post in posts" :key="post.id">
    <v-card>
      <div>{{post.author}}</div>
      <div>{{post.cathegory}}</div>
      <div>{{post.content}}</div>
      </v-card>
  </v-container>
  </v-app>
</template>

<script>
import InputModal from './components/InputModal.vue'

export default {

  name: 'App',
  data() {
    return {
      
    }
  },

  components: {
    'input-modal' : InputModal,
  },
  computed : {
    posts() {
      return this.$store.state.posts
    }
  },

  
  
};
</script>
