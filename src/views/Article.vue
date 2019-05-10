<template>
  <div v-loading.fullscreen.lock="loading">
    <div class="article-wrapper">
      <div class="title" v-text="article.title"></div>
      <div class="create">{{article.createdAt | handleDateFormat}}</div>
      <div class="content markdown-body" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  computed: Vuex.mapState({
    article: state => state.article,
    loading: state => state.article.loading,
    content () {
      let _content = this.article.content
      return _content
    }
  }),

  created () {
    this.$store.dispatch('getArticle', this.$route.params.id)
  },

  beforeDestroy () {
    this.$store.dispatch('clearArticle')
  }
}
</script>

<style lang="scss">
@import '../assets/scss/views/article.scss';
</style>
