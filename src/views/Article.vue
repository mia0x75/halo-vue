<template>
  <div v-loading.fullscreen.lock="loading">
    <header class="a-header" :style="{background: 'url('+article.cover+')' + 'center center / cover', backgroundSize: 'cover'}">
      <vNav></vNav>
    </header>
    <div class="article-wrapper">
      <div class="title" v-text="article.title"></div>
      <div class="create">{{article.createdAt | handleDateFormat}}</div>
      <div class="content markdown-body" v-html="content"></div>
      <Comment></Comment>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  components: {
    'Comment': () => import('../components/Comment.vue'),
    'Copyright': () => import('../components/Copyright.vue'),
    'vNav': () => import('../components/Nav.vue')
  },

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
