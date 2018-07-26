<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/news">
            <span class="tab-link" @click="moveToNews">
                热门新闻
                <span class="active-line" ref="activeLine"></span>
            </span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/videos">
            <span class="tab-link" @click="moveToVideo">
                新鲜视频
            </span>
        </router-link>
    </div>
</template>

<script>
    import animations from 'create-keyframe-animation'

    export default {
        methods: {
            moveToVideo(el, done) {
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
                const x = window.innerWidth / 2

                let animation = {
                    0: {
                        transform: `translate3d(${x}px, 0, 0) scaleX(1)`
                    },
                    50: {
                        transform: `translate3d(${x / 2}px, 0, 0) scaleX(0.2)`
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
        .tab-item
            flex 1
            border-right 1px solid $color-desc
            &:last-child
                border-right none
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
