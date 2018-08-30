import Vue from 'vue'
import Router from 'vue-router'
import News from 'components/news/news'
import Videos from 'components/videos/videos'
import Search from 'components/search/search'
import NewsDetail from 'components/news-detail/news-detail'
import Menu from 'components/menu/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          path: ':id',
          component: NewsDetail
        }
      ]
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: ':id',
          component: NewsDetail
        }
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
