<template>
    <transition name="slider">
        <div class="news-detail">
            <scroll :data="newsData" class="news-content" :pullup="pullup" ref="newsData" @scrollToEnd="refreshScroll">
                <div>
                    <div class="news-header">
                        <div class="top">
                            <i class="back icon icon-arrow_lift" @click="back"></i>
                            <h1 class="top-title">每日新闻</h1>
                        </div>
                        <h1 class="title">{{this.news.title}}</h1>
                    </div>
                    <div class="desc">
                        <div class="media">
                            <img :src="mediaInfo.avatar_url" alt="" class="avatar">
                            <h2 class="source">{{mediaInfo.screen_name}}</h2>
                        </div>
                        <div class="comments">{{this.news.datetime}}&nbsp&nbsp&nbsp{{newsData.comment_count}}评论</div>
                        <div class="key-words" v-show="keyWords.length">
                            <i class="icon icon-price-tags"></i>
                            <ul class="tag">
                                <li class="item" v-for="item in keyWords">{{item}}</li>
                            </ul>
                        </div>
                        <div class="collection">
                            <div class="noFavorite" v-show="!isFavorite()" @click="toggleFavorite">
                                <span class="icon icon-star-empty"></span>
                                <span class="text">&nbsp&nbsp&nbsp收藏</span>
                            </div>
                            <div class="isFavorite" v-show="isFavorite()" @click="toggleFavorite">
                                <span class="icon icon-star-full"></span>
                                <span class="text">已收藏</span>
                            </div>
                        </div>
                    </div>
                    <div class="content" v-html="newsData.content"></div>
                </div>
            </scroll>
            <top @top="top"></top>
        </div>
    </transition>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {getNewsDetail} from 'api/getNews'
    import Scroll from 'base/scroll/scroll'
    import Top from 'base/top/top'

    export default {
        data() {
            return {
                newsData: {},
                mediaInfo: '',
                keyWords: '',
                pullup: true
            }
        },
        created() {
            this._getNewsDetail()
        },
        props: {
            routerBack: {
                type: String,
                default: 'news'
            }
        },
        computed: {
            ...mapGetters([
                'news',
                'favoriteList'
            ])
        },
        methods: {
            back() {
                this.$router.back()
            },
            refreshScroll() {
                this.$refs.newsData.refresh()
            },
            top() {
                this.$refs.newsData.scrollTo(0, 0, 300)
            },
            toggleFavorite() {
                if (this.isFavorite()) {
                    this.deleteFavoriteList(this.news)
                }
                else {
                    this.saveFavoriteList(this.news)
                }
            },
            isFavorite() {
                const index = this.favoriteList.findIndex((item) => {
                    return item.group_id === this.news.group_id
                })
                return index > -1
            },
            _getNewsDetail() {
                if (!this.news.group_id) {
                    this.$router.push({
                        path: `/${this.routerBack}`
                    })
                }
                getNewsDetail(this.news.group_id).then((res) => {
                    this.newsData = res.data
                    this.mediaInfo = res.data.media_user
                    if (this.news.keywords) {
                        this.keyWords = this._normalizeKeyWords(this.news.keywords)
                    }
                })
            },
            _normalizeKeyWords(str) {
                return str.split(",")
            },
            ...mapActions([
                'saveFavoriteList',
                'deleteFavoriteList'
            ])
        },
        components: {
            Scroll,
            Top
        },
    }
</script>

<style lang="stylus">
    // 去掉scoped，使样式可以应用到v-html内容中
    @import "~common/stylus/variable"

    .slider-enter-active, .slider-leave-active
        transition all 0.3s
    .slider-enter, .slider-leave-to
        transform translate3d(100%, 0, 0)
    .news-detail
        position fixed
        z-index 100
        top 0
        bottom 0
        left 0
        right 0
        background $color-title
        .news-content
            height: 100%
            overflow: hidden
            .news-header
                .top
                    position relative
                    height 60px
                    line-height 60px
                    text-align center
                    background $color-background
                    color $color-title
                    .back
                        position absolute
                        top 22px
                        left 22px
                        font-size $font-size-title
                    .top-title
                        display inline-block
                        font-size $font-size-title-l
                .title
                    margin 30px 15px
                    font-size $font-size-title-l
                    font-weight 700
            .desc
                margin 30px 15px 0
                .media
                    display inline-block
                    height 25px
                    .avatar
                        width 25px
                        height 25px
                        border-radius 50%
                    .source
                        display inline-block
                        vertical-align top
                        height 25px
                        line-height 25px
                .comments
                    display inline-block
                    float right
                    height 25px
                    line-height 25px
                    color $color-desc
                    font-size $font-size-small
                .key-words
                    margin-top 10px
                    font-size $font-size-small
                    .tag   
                        margin-left 5px
                        display inline-block
                        .item
                            margin-right 5px
                            display inline-block
                            color $color-desc
                .collection
                    margin-top 10px
                    .isFavorite
                        .icon-star-full
                            color $color-isFavorite
                        .text
                            color $color-desc
            .content
                padding 30px 15px
                box-sizing border-box
                width 100%
                font-size $font-size-title
                line-height 1.5
                p
                    margin-bottom 20px
                img
                    width 100%
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
</style>

