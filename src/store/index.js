import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlideIndex: 0
  },
  mutations: {
    updateSlider(state, payload) {
      state.currentSlideIndex = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
