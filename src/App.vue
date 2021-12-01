<template>
  <v-app>
    <v-form ref="form">
    <v-container fluid>
      <v-row align="center"> 
        <v-col
          cols="4"
          
        >
          <v-text-field
           v-model="postData.author"
            label="Authorenname"
            required
          ></v-text-field>
        </v-col> 

        <v-col
          cols="4"
        >
           <v-select
          :items="cathegories"
          label="Kategorie"
          v-model="postData.cathegory"
        ></v-select>
  </v-col> 
        
      </v-row>
      <v-btn @click="updateMessage">submit</v-btn>
    </v-container>
    
  </v-form>
  <v-container v-for="post in posts" :key="post.id">
    <v-card>
      <div>{{post.author}}</div>
      <div>{{post.cathegory}}</div>
      </v-card>
  </v-container>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      cathegories : ['Politik', 'Natur', 'Aktuell', 'Umwelt'],
      postData : {
        author : '',
        cathegory: '',
        date : new Date().toLocaleDateString(),
        content : '',
        id : ''
      },
    }
  },

  components: {
    
  },
  computed : {
    posts() {
      return this.$store.state.posts
    }
  },

  
  methods : {
    setPostId() {
      this.postData.id = this.postData.author.slice(0, 1) + this.postData.author.slice(-1) + Date.now() 
    },
    
    updateMessage() {
      this.setPostId()
      const finalData = {...this.postData}
      this.$store.dispatch('updateMessage', finalData)
      this.$refs.form.reset()
      
      console.log(this.postData)
    }
  }
};
</script>
