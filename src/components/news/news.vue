<template>
    <div class="news">
        <scroll class="news-content" ref="scroll" :data="allNews">
            <div>
                <div class="swiper-wrapper" v-if="hotSpot.length">
                    <slider>
                        <div v-for="item in hotSpot">
                            <span href="">
                                <img :src="item.image_url" @load="loadImage">
                            </span>
                        </div>
                    </slider>
                </div>
                <div class="news-wrapper">
                    <news-list :allNews="allNews"></news-list>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
    import {getRollNews, getAllNews} from 'api/getNews'
    import Slider from 'base/slider/slider'
    import Scroll from 'base/scroll/scroll'
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
            loadImage() {
                if(!this.loadchecked) {
                    this.$refs.scroll.refresh()
                    this.loadchecked = true
                }
            },
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
            NewsList,
            Scroll
        },
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"
    
    .news
        position fixed
        width 100%
        top 100px
        bottom 0
        .news-content
            height: 100%
            overflow: hidden
            .swiper-wrapper
                position relative
                width 100%
                overflow hidden
</style>
