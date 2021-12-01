import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        author : ""
    },
    actions : {
        updateMessage : (context, payload) => {
            context.commit('updateMessage', payload)
        }
    },
    mutations : {
        updateMessage : (state, payload) => {
            state.author = payload
            console.log(state.author)
        }
    }
})