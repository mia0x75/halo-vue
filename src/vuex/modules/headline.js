import {
  GET_HEADLINE,
  UPDATE_HEADLINE
} from '../behaviors'

const state = {
  headline: ''
}

const mutations = {
  [GET_HEADLINE] (state) {
    return state.headline
  },

  [UPDATE_HEADLINE] (state, value) {
    state.headline = value
  }
}

export default {
  state,
  mutations
}
