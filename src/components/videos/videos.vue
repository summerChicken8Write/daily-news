<template>
    <div class="videos">
        <scroll class="videos-content" :data="videos" :pullup="pullup" @scrollToEnd="searchMore">
            <div>
                <div class="videos-item" v-for="item in videos">
                    <div class="title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="image-wrapper">
                        <img v-lazy="item.large_image_url" alt="">
                        <span class="icon"></span>
                    </div>
                    <div class="desc">
                        <span class="source">{{item.source}}</span>
                        <span class="comment">评论&nbsp{{item.comment_count}}</span>
                    </div>
                </div>
                <loading title=""></loading>
            </div>
        </scroll>
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
                .image-wrapper
                    img
                        width 100%
                .desc
                    margin-top 9px
                    font-size $font-size-small
                    color $color-desc
</style>
