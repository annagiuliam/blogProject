import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        author : ""
    },
    mutations : {
        updateMessage (state, author) {
            state.author = author
            console.log(state.author)
        }
    }
})