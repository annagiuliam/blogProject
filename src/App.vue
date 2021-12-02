<template>
 <!-- <div>
   <input-modal></input-modal>
  <div v-for="post in posts" :key="post.id">
    <div>
      <div>{{post.author}}</div>
      <div>{{post.cathegory}}</div>
      <div>{{post.content}}</div>
      </div>

      </div>
  </div> -->
 
  <v-app>
    <v-btn
      class="ma-2"
      outlined
      color="indigo"
      @click="openInputModal"
    >
      Outlined Button
    </v-btn>
    <div v-if="showInputModal">
      <input-modal></input-modal>
    </div>
   
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
      showInputModal : false,
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
  methods : {
    openInputModal() {
      this.showInputModal = true;
    }
  }

  
  
};
</script>
