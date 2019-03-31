import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Discover from '@/views/Discover'
import Music from '@/views/Music'
import Video from '@/views/Video'
import Friend from '@/views/discover/Friend'
import Radio from '@/views/discover/Radio'
import Recommend from '@/views/discover/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Discover',
          component: Discover,
          children: [
            {
              path: '',
              name: 'Recommend',
              component: Recommend
            },
            {
              path: 'friend',
              name: 'Friend',
              component: Friend
            },
            {
              path: 'radio',
              name: 'Radio',
              component: Radio
            }
          ]
        },
        {
          path: 'music',
          name: 'Music',
          component: Music
        },
        {
          path: 'video',
          name: 'Video',
          component: Video
        }
      ]
    }
  ]
})
