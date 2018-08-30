import Vue from 'vue'
import Router from 'vue-router'
import News from 'components/news/news'
import Videos from 'components/videos/videos'
import Search from 'components/search/search'
import NewsDetail from 'components/news-detail/news-detail'
import Collection from 'components/collection/collection'

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
      path: '/collection',
      name: 'collection',
      component: Collection,
      children: [
        {
          path: ':id',
          component: NewsDetail
        }
      ]
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})
