import {
  REQUEST_CONTENT_LIST,
  GET_CONTENT_LIST,
  GET_CONTENT_LIST_LENGTH,
  GET_CONTENT_LIST_FAILURE,
  POST_ARTICLE,
  POST_ARTICLE_FAILURE
} from '../behaviors'

const state = {
  isFetching: false,
  urPage: Number,
  ength: Number,
  ontentList: []
}

const mutations = {
  [REQUEST_CONTENT_LIST] (state, page) {
    state.isFetching = true
    state.curPage = page || 1
  },

  [GET_CONTENT_LIST] (state, items) {
    state.isFetching = false
    state.contentList = items
  },

  [GET_CONTENT_LIST_LENGTH] (state, length) {
    state.length = length
  },

  [GET_CONTENT_LIST_FAILURE] (state) {
    state.isFetching = false
  },

  [POST_ARTICLE] (state, data) {
    state.contentList.push(data)
  },

  [POST_ARTICLE_FAILURE] (state) {
    return state
  }
}

export default {
  state,
  mutations
}
