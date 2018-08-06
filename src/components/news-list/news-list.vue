<template>
    <div class="news-list">
        <div class="news-content">
            <div class="news-item" v-for="item in allNews">
                <div class="text">
                    <h1 class="title">{{item.title}}</h1>
                    <div class="desc">
                        <span class="label" v-if="item.label">{{item.label}}</span>
                        <span class="source">{{item.source}}</span>
                        <span class="comment">评论&nbsp{{item.comment_count}}</span>
                    </div>
                </div>
                <div class="image-wrapper" v-if="item.has_image">
                    <img :src="item.image_url">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            allNews: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"

    .news-list
        width 100%
        .news-content
            .news-item
                display flex
                margin 20px 10px 0px 10px
                padding-bottom 20px
                border-bottom 1px solid $color-border
                .text
                    flex 1
                    .title
                        margin-bottom 10px
                        line-height 20px
                        font-size $font-size-title
                        color $color-text
                    .desc
                        font-size $font-size-small
                        color $color-desc
                        .label
                            padding 0 3px
                            border 1px solid $color-active
                            font-size $font-size-small-label
                            color $color-active
                .image-wrapper
                    flex 0 0 30%
                    img
                        width 100%
                        height 100%
</style>

