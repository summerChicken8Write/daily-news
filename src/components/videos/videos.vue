<template>
    <div class="videos">
        <scroll class="videos-content" :data="videos" :pullup="pullup" @scrollToEnd="searchMore" v-show="videos.length">
            <div>
                <div class="videos-item" v-for="item in videos">
                    <div class="title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <span class="icon"></span>
                    <div class="image-wrapper">
                        <img v-lazy="item.large_image_url" alt="">
                    </div>
                    <div class="desc">
                        <span class="source">{{item.source}}</span>
                        <span class="comment">评论&nbsp{{item.comment_count}}</span>
                    </div>
                </div>
                <loading title=""></loading>
            </div>
        </scroll>
        <div class="loading-container" v-show="!videos.length">
            <loading></loading>
        </div>
    </div>
</template>

<script>
    import {getVideos} from 'api/getVideos'
    import Scroll from 'base/scroll/scroll'
    import Loading from 'base/loading/loading'

    export default {
        data() {
            return {
                videos: [],
                pullup: true,
            }
        },
        created() {
            this._getVideos()
        },
        methods: {
            searchMore() {
                getVideos().then((res) => {
                    this.videos = this.videos.concat(res.data)
                })
            },
            _getVideos() {
                getVideos().then((res) =>{
                    this.videos = res.data
                    console.log(res.data)
                })
            },
        },
        components: {
            Scroll,
            Loading
        },
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"

    .videos
        position fixed
        width 100%
        top 100px
        bottom 0
        .videos-content
            height: 100%
            overflow: hidden
            .videos-item
                position relative
                margin 20px 10px 0px 10px
                padding-bottom 17px
                border-bottom 1px solid $color-border
                .title
                    position absolute
                    top 0
                    left 0
                    padding 10px
                    color $color-title
                    font-size $font-size-title
                    background linear-gradient(to bottom, rgba(7, 17, 27, 0.75), rgba(7, 17, 27, 0.05))
                // 制作一个带边框的三角形图标
                .icon
                    position absolute
                    top 50%
                    left 50%
                    display inline-block
                    width 50px
                    height 50px
                    transform: translate(-50%, -70%)
                    border-radius 50%
                    background $color-dot
                    &:before
                        position absolute
                        top 50%
                        left 55%
                        display inline-block
                        transform: translate(-50%, -50%)
                        content: ''
                        border-top 15px solid transparent
                        border-left 20px solid $color-border
                        border-bottom 15px solid transparent
                    &:after
                        position absolute
                        top 19%
                        left 33%
                        display inline-block
                        content: ''
                        border-top 15px solid transparent
                        border-left 20px solid $color-background
                        border-bottom 15px solid transparent
                        transform scale(0.85)
                .image-wrapper
                    img
                        width 100%
                .desc
                    margin-top 9px
                    font-size $font-size-small
                    color $color-desc
        .loading-container
            position: absolute
            width: 100%
            top: 50%
            transform: translateY(-50%)
</style>
