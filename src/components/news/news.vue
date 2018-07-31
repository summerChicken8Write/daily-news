<template>
    <div class="news">
        <div class="swiper-wrapper">
            <slider>
                <div v-for="item in hotSpot">
                    <span href="">
                        <img :src="item.image_url" alt="">
                    </span>
                </div>
            </slider>
        </div>
        <div class="news-wrapper">
            <news-list></news-list>
        </div>
    </div>
</template>

<script>
    import {getRollNews, getAllNews} from 'api/getNews'
    import Slider from 'base/slider/slider'
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
                    console.log(res.data)
                    this.allNews = res.data
                })
            },
        },
        components: {
            Slider,
            NewsList
        },
    }
</script>

<style lang="stylus">
    .news
        position fixed
        width 100%
        top 100px
        bottom 0
        .swiper-wrapper
            position relative
            width 100%
            overflow hidden
</style>
