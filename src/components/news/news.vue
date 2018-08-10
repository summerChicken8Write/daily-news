<template>
    <div class="news">
        <scroll class="news-content" ref="scroll" :data="allNews" :pullup="pullup" @scrollToEnd="searchMore">
            <div>
                <div class="swiper-wrapper" v-if="hotSpot.length">
                    <slider :theDots="false">
                        <div v-for="item in hotSpot">
                            <div class="title-wrapper">
                                <h1 class="title">
                                    <span href="">
                                        {{item.title}}
                                    </span>
                                </h1>
                            </div>
                            <img :src="item.image_url" @load="loadImage">
                        </div>
                    </slider>
                </div>
                <div class="news-wrapper" v-show="allNews.length">
                    <news-list :allNews="allNews"></news-list>
                </div>
            </div>
        </scroll>
        <div class="loading-container" v-show="!allNews.length">
            <loading></loading>
        </div>
    </div>
</template>

<script>
    import {getRollNews, getAllNews} from 'api/getNews'
    import Slider from 'base/slider/slider'
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'
    import NewsList from 'components/news-list/news-list'

    const SUCCESS = 'success'

    export default {
        data() {
            return {
                hotSpot: [],
                allNews: [],
                pullup: true,
            }
        },
        created() {
            this._getRollNews()
            // setTimeout(() => {
            //     this._getAllNews()
            // }, 5000)
            this._getAllNews()
        },
        methods: {
            loadImage() {
                if(!this.loadchecked) {
                    this.$refs.scroll.refresh()
                    this.loadchecked = true
                }
            },
            searchMore() {
                getAllNews().then((res) => {
                    this.allNews = this.allNews.concat(res.data)
                })
            },
            _getRollNews() {
                getRollNews().then((res) => {
                    if(res.message === SUCCESS) {
                        this.hotSpot = res.data.pc_feed_focus
                        console.log(this.hotSpot)
                    }
                })
            },
            _getAllNews() {
                getAllNews().then((res) => {
                    // console.log(res.data)
                    this.allNews = res.data
                    // this.allNews = this.allNews.concat(res.data)
                })
            },
        },
        components: {
            Slider,
            NewsList,
            Scroll,
            Loading
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
                .title-wrapper
                    width 100%
                    height 30px
                    line-height 30px
                    background linear-gradient(to left, rgba(7, 17, 27, 0.3), rgba(7, 17, 27, 0.01))
                    .title
                        box-sizing border-box
                        color $color-text
                        width 100%
                        padding 0 10px
                        text-align right
                        overflow hidden
                        text-overflow ellipsis
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
</style>
