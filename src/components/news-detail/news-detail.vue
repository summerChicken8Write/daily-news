<template>
    <transition name="slider">
        <div class="news-detail">
            <scroll :data="newsData" class="news-content">
                <div>
                    <div class="news-heder">
                        <i class="back" @click="back">back</i>
                        <h1 class="title">{{this.news.title}}</h1>
                    </div>
                    <div class="desc">
                        <div class="media">
                            <img :src="mediaInfo.avatar_url" alt="" class="avatar">
                            <h2 class="source">{{mediaInfo.screen_name}}</h2>
                        </div>
                        <div class="comments">{{newsData.comment_count}}评论</div>
                        <div class="keyWords" v-for="item in keyWords" v-show="keyWords.length">
                            <span class="item">{{item}}</span>
                        </div>
                    </div>
                    <div class="content" v-html="newsData.content"></div>
                </div>
            </scroll>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {getNewsDetail} from 'api/getNews'
    import Scroll from 'base/scroll/scroll'

    export default {
        data() {
            return {
                newsData: {},
                mediaInfo: '',
                keyWords: ''
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
                'news'
            ])
        },
        methods: {
            back() {
                this.$router.back()
            },
            _getNewsDetail() {
                console.log(this.news)
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
                    console.log(this.newsData)
                })
            },
            _normalizeKeyWords(str) {
                return str.split(",")
            }
        },
        components: {
            Scroll
        }
    }
</script>

<style lang="stylus" scoped>
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
</style>

