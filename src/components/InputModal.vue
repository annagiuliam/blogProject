<template>
  <v-app>
        <v-btn
      class="ma-2"
      outlined
      fab
      small
      color="indigo"
      @click="closeInputModal"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
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
  </v-app>
</template>

<script>
export default {
    name : 'InputModal',
    data(){
        return {
            cathegories : ['Politik', 'Natur', 'Aktuell', 'Umwelt'],
            dateOptions : {year: 'numeric', month: 'long', day: 'numeric'},
            postData : {
            author : '',
            cathegory: '',
            date : new Date(),
            content : '',
            id : ''
            }
        }
    },
    methods : {
        setPostId() {
            this.postData.id = this.postData.author.slice(0, 1) + this.postData.author.slice(-1) + Date.now() 
        },
        setDate() {
            this.postData.date = this.postData.date.toLocaleDateString(undefined, this.dateOptions)
        },
        updateMessage() {
            this.setPostId()
            this.setDate()
            const finalData = {...this.postData}
            this.$store.dispatch('updateMessage', finalData)
            this.$refs.form.reset()
        },
        closeInputModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>