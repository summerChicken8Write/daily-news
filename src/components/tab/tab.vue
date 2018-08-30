<template>
    <div class="tab">
        <div class="tab-item" @click="moveToNews">
            <span class="tab-link">
                热门新闻
                <span class="active-line" ref="activeLine"></span>
            </span>
        </div>
        <div class="tab-item" @click="moveToVideo">
            <span class="tab-link">
                新鲜视频
            </span>
        </div>
    </div>
</template>

<script>
    import animations from 'create-keyframe-animation'
    import {prefixStyle} from 'common/js/dom'

    const transform = prefixStyle('transform')

    export default {
        mounted() {
            this._checkRouter()
        },
        methods: {
            moveToVideo(el, done) {
                //跳转路由
                this.$router.push({path:'/videos'})
                
                // 配置移动距离
                const x = window.innerWidth / 2

                // 定义动画内容
                let animation = {
                    0: {
                        transform: `translate3d(0, 0, 0) scaleX(1)`
                    },
                    50: {
                        transform: `translate3d(${x / 2}px, 0, 0) scaleX(0.2)`
                    },
                    100: {
                        transform: `translate3d(${x}px, 0, 0) scaleX(1)`
                    },
                }

                // 注册动画
                animations.registerAnimation({
                    name: 'moveToVideo',
                    animation,
                    presets: {
                        duration: 400,
                        easing: 'linear'
                    }
                })

                // run动画
                animations.runAnimation(this.$refs.activeLine, 'moveToVideo', done)
            },
            moveToNews(el, done) {
                this.$router.push({path:'/news'})
                
                const x = window.innerWidth / 2

                let animation = {
                    0: {
                        transform: `translate3d(${x}px, 0, 0) scaleX(1)`
                    },
                    100: {
                        transform: `translate3d(0, 0, 0) scaleX(1)`
                    },
                }

                animations.registerAnimation({
                    name: 'moveToNews',
                    animation,
                    presets: {
                        duration: 400,
                        easing: 'linear'
                    }
                })

                animations.runAnimation(this.$refs.activeLine, 'moveToNews', done)
            },
            _checkRouter(el, done) {
                const NEWS = 'news'
                const VIDEOS = 'videos'
                const x = window.innerWidth / 2
                if (this.$route.name === NEWS) {
                    this.$refs.activeLine.style[transform] = `translate3d(0, 0, 0)`
                }
                if (this.$route.name === VIDEOS) {
                    this.$refs.activeLine.style[transform] = `translate3d(${x}px, 0, 0)`
                }
            },
        },
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"
    .tab
        display flex
        height 40px
        line-height 40px
        text-align center
        background $color-border
        .tab-item
            flex 1
            .tab-link
                position relative
                padding-bottom 5px
                color $color-text
                .active-line
                    display block
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    border-top 2px solid $color-active
                    content: ' '
            // &.active
            //     .tab-link
            //         border-bottom 2px solid $color-active
</style>
