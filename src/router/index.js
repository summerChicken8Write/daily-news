import Vue from 'vue'
import Router from 'vue-router'
import News from 'components/news/news'
import Videos from 'components/videos/videos'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/news'
        },
        {
            path: '/news',
            name: 'news',
            component: News,
        },
        {
            path: '/videos',
            name: 'videos',
            component: Videos,
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})
