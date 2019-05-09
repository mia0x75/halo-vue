import axios from 'axios'
import {
  API_ROOT
} from '../config'

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'

export const REQUEST_CONTENT_LIST = 'REQUEST_CONTENT_LIST'
export const GET_CONTENT_LIST = 'GET_CONTENT_LIST'
export const GET_CONTENT_LIST_LENGTH = 'GET_CONTENT_LIST_LENGTH'
export const GET_CONTENT_LIST_FAILURE = 'GET_CONTENT_LIST_FAILURE'

export const UPDATE_HEADLINE = 'UPDATE_HEADLINE'
export const GET_HEADLINE = 'GET_HEADLINE'

export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLE_FAILURE = 'GET_ARTICLE_FAILURE'
export const CLEAR_ARTICLE = 'CLEAR_ARTIVLE'

export const POST_ARTICLE = 'POST_ARTICLE'
export const POST_ARTICLE_FAILURE = 'POST_ARTICLE_FAILURE'

export const GET_TAGS = 'GET_TAGS'
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE'

export const GET_TAG_CONTENT_LIST = 'GET_TAG_CONTENT_LIST'
export const GET_TAG_CONTENT_LIST_FAILURE = 'GET_TAG_CONTENT_LIST_FAILURE'

export const GET_COMMENTS_LIST = 'GET_COMMENTS_LIST'
export const GET_COMMENTS_LIST_FAILURE = 'GET_COMMENTS_LIST_FAILURE'

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT'
export const SUBMIT_COMMENT_FAILURE = 'SUBMIT_COMMENT_FAILURE'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const LOGOUT_USER = 'LOGOUT_USER'

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  // 获取文章列表, 现仅返回所有文章的数量
  getAllContentList ({ commit }) {
    commit(REQUEST_CONTENT_LIST)
    axios.get(API_ROOT + 'api/contentAll')
      .then(response => {
        commit(GET_CONTENT_LIST_LENGTH, response.data.listLength)
      })
      .catch(error => {
        commit(GET_CONTENT_LIST_FAILURE, error)
      })
  },

  getContentByPage ({ commit }, page) {
    commit(REQUEST_CONTENT_LIST, page)
    axios.get(API_ROOT + 'api/contentlist/' + page)
      .then(response => {
        commit(GET_CONTENT_LIST, response.data.data)
      })
      .catch(error => {
        commit(GET_CONTENT_LIST_FAILURE, error)
      })
  },

  // 获取文章内容, 清除文章
  getArticle ({ commit }, id) {
    axios.get(API_ROOT + 'api/article/' + id)
      .then(response => {
        commit(GET_ARTICLE, response.data)
        setTimeout(() => {
          commit('SET_LOADING_FALSE')
        }, 400)
      })
      .catch(error => {
        commit(GET_ARTICLE_FAILURE, error)
      })
  },

  // 发布文章
  submitArticle ({ commit }, data) {
    axios.post('http://nickj.leanapp.cn/' + 'api/article/submitArticle', data)
      .then(response => {
        commit(POST_ARTICLE, response.data)
      })
      .catch(error => {
        commit(POST_ARTICLE_FAILURE, error)
      })
  },

  clearArticle ({ commit }) {
    commit(CLEAR_ARTICLE)
    setTimeout(() => {
      commit('SET_LOADING_TRUE')
    }, 400)
  },

  // 根据 文章 id 获取 comments
  getCommentsList ({ commit }, articleId) {
    axios.get(API_ROOT + 'api/comments/' + articleId)
      .then(response => {
        commit(GET_COMMENTS_LIST, response.data)
      })
      .catch(error => {
        commit(GET_COMMENTS_LIST_FAILURE, error)
      })
  },

  // 提交评论
  submitComment ({ commit }, data) {
    axios.post('http://nickj.leanapp.cn/api/comments/submitComment', data)
      .then(response => {
        commit(SUBMIT_COMMENT, response.data)
      })
      .catch(error => {
        commit(SUBMIT_COMMENT_FAILURE, error)
      })
  },

  // 获取标签集, 获取指定标签列表
  getTags ({ commit }) {
    axios.get(API_ROOT + 'api/tags')
      .then(response => {
        commit(GET_TAGS, response.data)
      })
      .catch(error => {
        commit(GET_TAGS_FAILURE, error)
      })
  },

  getTagContentList ({ commit }, tagId) {
    axios.get(API_ROOT + 'api/tags/' + tagId)
      .then(response => {
        commit(GET_TAG_CONTENT_LIST, response.data, tagId)
      })
      .catch(error => {
        commit(GET_TAG_CONTENT_LIST_FAILURE, error)
      })
  },

  // 管理员登录
  loginUser ({ commit }, data) {
    axios.post('http://nickj.leanapp.cn/api/login', data)
      .then(response => {
        commit(LOGIN_USER, response.data)
      })
      .catch(error => {
        commit(LOGIN_USER_FAILURE, error)
      })
  },

  logoutUser ({ commit }) {
    axios.post('http://nickj.leanapp.cn/api/logout')
      .then(response => {
        commit(LOGOUT_USER)
        sessionStorage.clear()
      })
  }
}
