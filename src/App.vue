<template>
  <site-wrapper>
    <site-header imageUrl="/static/images/halo.svg" @toggle-menu="toggleMenu">
      <notifications/>
      <account-dropdown imageUrl="/static/demo/faces/female/25.jpg"/>
    </site-header>
    <site-nav :collapsed="menuCollapsed">
      <nav-item to="/" icon="home" label="首页"/>
      <nav-item to="/queries" icon="box" label="查询">
        <dropdown-menu-item label="Cards design"/>
        <dropdown-menu-item label="Charts"/>
        <dropdown-menu-item label="Pricing cards"/>
      </nav-item>
      <nav-item to="/tickets" icon="hash" label="工单">
        <dropdown-menu-item label="Maps"/>
        <dropdown-menu-item label="Icons"/>
        <dropdown-menu-item label="Blog"/>
        <dropdown-menu-item label="Carousel"/>
      </nav-item>
      <nav-item to="/crons" icon="clock" label="预约">
        <dropdown-menu-item label="Profile"/>
        <dropdown-menu-item label="Login"/>
        <dropdown-menu-item label="Register"/>
        <dropdown-menu-item label="Forgot password"/>
        <dropdown-menu-item label="400 error"/>
        <dropdown-menu-item label="401 error"/>
        <dropdown-menu-item label="403 error"/>
        <dropdown-menu-item label="404 error"/>
        <dropdown-menu-item label="500 error"/>
        <dropdown-menu-item label="503 error"/>
        <dropdown-menu-item label="Email"/>
        <dropdown-menu-item label="Empty page"/>
        <dropdown-menu-item label="RTL mode"/>
      </nav-item>
      <nav-item to="/forms" icon="server" label="群集"/>
      <nav-item to="/rules" icon="check-square" label="规则"/>
      <nav-item to="/users" icon="users" label="用户"/>
      <nav-item to="/logs" icon="file" label="日志"/>
      <nav-item to="/" icon="settings" label="设置"/>
    </site-nav>
    <router-view class="router-view"></router-view>
  </site-wrapper>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/scss/app.scss';
</style>
