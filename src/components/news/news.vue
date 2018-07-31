<template>
    <div class="news">
        <div class="swiper-wrapper">
            <swiper :hotSpot="hotSpot"></swiper>
        </div>
        <div class="news-wrapper">
            <news-list></news-list>
        </div>
    </div>
</template>

<script>
    import {getRollNews, getAllNews} from 'api/getNews'
    import Swiper from 'base/swiper/swiper'
    import NewsList from 'components/news-list/news-list'

    const SUCCESS = 'success'

    export default {
        data() {
            return {
                hotSpot: [],
                allNews: []
            }
        },
        created() {
            this._getRollNews()
            this._getAllNews()
        },
        methods: {
            _getRollNews() {
                getRollNews().then((res) => {
                    if(res.message === SUCCESS) {
                        this.hotSpot = res.data.pc_feed_focus
                        // console.log(this.hotSpot)
                    }
                })
            },
            _getAllNews() {
                getAllNews().then((res) => {
                    if(res.message === SUCCESS) {
                        this.allNews = res.data
                        console.log(this.allNews)
                    }
                })
            },
        },
        components: {
            Swiper,
            NewsList
        },
    }
</script>

<style lang="stylus">

</style>
