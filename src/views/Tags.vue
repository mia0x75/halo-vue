<template>
  <div>
    <header class="a-header">
      <nav class="main-nav">
        <h1>{{headerName}}</h1>
      </nav>
    </header>
    <div class="tag-list">
      <ul>
        <li v-for="(tag, index) in tags" :key="tag.objectId">
          <a @click="update(index, tag.tagName, tag.objectId)" :class="{'tag-list-active' : index === selected}">
            {{tag.tagName}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  data () {
    return {
      selected: 0,
      headerName: ''
    }
  },

  created () {
    this.$store.dispatch('getTags')
  },

  computed: Vuex.mapState({
    tags: state => state.tags.tagList
  }),

  watch: {
    'tags': function (val) {
      if (val) {
        this.headerName = val[0].tagName
      }
    }
  },

  methods: {
    update (index, tagName, tagId) {
      this.selected = index
      this.headerName = tagName
      this.$store.dispatch('getTagContentList', tagId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/tags.scss';
</style>
