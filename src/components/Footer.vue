<template lang="html">
  <footer>
    <Pagination />
    <Copyright />
  </footer>
</template>

<script>
import Pagination from './Pagination'
import Copyright from './Copyright'

export default {
  components: {
    Pagination,
    Copyright
  }
}
</script>

<style lang="scss">
@import '../assets/scss/components/footer.scss';
</style>
