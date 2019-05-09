import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: {name: 'Index'}
    },
    {
      path: '/',
      name: 'Index',
      component: function (resolve) {
        require(['@/views/Index'], resolve)
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: function (resolve) {
        require(['@/views/Demo'], resolve)
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: function (resolve) {
        require(['@/views/Article'], resolve)
      }
    },
    {
      path: '/tags',
      name: 'tags',
      component: function (resolve) {
        require(['@/views/Tags'], resolve)
      }
    },
    {
      path: '/about',
      name: 'about',
      component: function (resolve) {
        require(['@/views/About'], resolve)
      }
    },
    {
      path: '/post',
      name: 'post',
      component: function (resolve) {
        require(['@/views/Post'], resolve)
      }
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['@/views/Login'], resolve)
      }
    }],

  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 路由切换时滚动到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return { y: 0 }
    }
  }
})
