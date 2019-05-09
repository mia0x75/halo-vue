import {
  GET_TAGS,
  GET_TAGS_FAILURE
} from '../actions'

const state = {
  tagList: []
}

const mutations = {
  [GET_TAGS] (state, items) {
    state.tagList = items
  },

  [GET_TAGS_FAILURE] (state) {
    return false
  }
}

export default {
  state,
  mutations
}
