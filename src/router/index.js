import Vue from 'vue'
import Router from 'vue-router'

// import News from 'components/news/news'
// import Videos from 'components/videos/videos'
// import Search from 'components/search/search'
// import NewsDetail from 'components/news-detail/news-detail'
// import Collection from 'components/collection/collection'

// 路由懒加载
const News = (resolve) => {
  import('components/news/news').then((module) => {
    resolve(module)
  })
}

const Videos = (resolve) => {
  import('components/videos/videos').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const NewsDetail = (resolve) => {
  import('components/news-detail/news-detail').then((module) => {
    resolve(module)
  })
}

const Collection = (resolve) => {
  import('components/collection/collection').then((module) => {
    resolve(module)
  })
}

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
