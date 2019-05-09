<template>
  <div>
    <vNav></vNav>
    <header class="a-header">
      <nav class="main-nav">
        <h1>About Me</h1>
      </nav>
    </header>
    <article>
      <p> <strong>Nickj</strong>  </p>
      <p><a href="https://github.com/Nicksapp">我的GitHub</a></p>
      <p>本项目源码 <a href="https://github.com/Nicksapp/ohmo-vue">Nicksapp/ohmo-vue</a></p>
    </article>
    <Copyright />
  </div>
</template>

<script>
export default {
  components: {
    'vNav': () => import('../components/Nav'),
    'Copyright': () => import('../components/Copyright.vue')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/about.scss';
</style>
