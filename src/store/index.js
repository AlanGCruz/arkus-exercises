import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    createdUsers: 0,
    editedUsers: 0,
  },
  getters: {
    created: state => {
      return state.createdUsers;
    },
    edited: state => {
      return state.editedUsers;
    },
  },
  mutations: {
    incrementCreated: state => {
      state.createdUsers++;
    },
    incrementEdited: state => {
      state.editedUsers++;
    },
  },
  actions: {
  },
  modules: {
  }
})
