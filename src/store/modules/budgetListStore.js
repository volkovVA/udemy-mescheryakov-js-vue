import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const listStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1
      },
      2: {
        type: 'OUTCOME',
        value: 50,
        comment: 'Some outcome comment',
        id: 2
      }
    }
  },
  getters: {
    budgetList: state => state.list
  },
  mutations: {
    ADD_ITEM (state, item) {
      Vue.set(state.list, item.id, item)
    }
  },
  actions: {
    addListItem ({ commit }, payload) {
      const newListItem = { ...payload }
      commit('ADD_ITEM', newListItem)
    }
  }
}

export default listStore
