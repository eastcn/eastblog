import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import postList from '@/views/list'
import rank from '@/views/rank'
import aboutMe from '@/views/aboutMe'
import editor from '@/views/editor'
import postContent from '@/views/post_content'
import movie from '@/views/movie'
import nft from '@/views/nft'
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
    },
    {
      path: '/post/:id',
      name: 'postContent',
      component: postContent
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/nft',
      name: 'nft',
      component: nft
    }
  ]
})
