import Vue from 'vue'
import Router from 'vue-router'
import createWebHashHistory from 'vue-router'
import createWebHistory from 'vue-router'

Vue.use(Router)

export default new Router({
  // history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      redirect: '/blog' // Currently, Blog is set for root page.
    },
    {
      path: '/blog',
      name: 'Blog',
      component: require('@/components/Blog').default
    },
    {
      path: '/blog/:id',
      name: 'Article',
      component: require('@/components/Article').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
