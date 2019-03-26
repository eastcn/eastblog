import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import postList from '@/views/list'
import aboutMe from '@/views/aboutMe'
import editor from '@/views/editor'
import mavonEditor from 'mavon-editor'

Vue.use(Router)
Vue.use(mavonEditor)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/post_list',
      name: 'postList',
      component: postList
    },
    {
      path: '/about_me',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ]
})
