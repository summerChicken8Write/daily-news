<template>
    <div class="news-list">
        <div class="news-content">
            <div class="news-item" v-for="item in allNews" @click="selectNews(item)">
                <div class="content">
                    <h1 class="title">{{item.title}}</h1>
                    <div class="image-list" v-if="item.has_image && item.image_list.length >= 3">
                        <div class="image-item" v-for="image in item.image_list.slice(0, 3)">
                            <img v-lazy="image.url" alt="">
                        </div>
                    </div>
                    <div class="desc">
                        <span class="label" v-if="item.label">{{item.label}}</span>
                        <span class="source">{{item.source}}</span>
                        <span class="comment">评论&nbsp{{item.comment_count}}</span>
                    </div>
                </div>
                <div class="image-wrapper" v-if="item.has_image && item.image_url && item.image_list.length < 3">
                    <img v-lazy="item.image_url">
                </div>
            </div>
            <loading title="" v-show="showLoading"></loading>
        </div>
    </div>
</template>

<script>
    import Loading from 'base/loading/loading'

    export default {
        data() {
            return {
                imageList: []
            }
        },
        props: {
            allNews: {
                type: Array,
                default: [],
            },
            showLoading: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            selectNews(item) {
                this.$emit('select', item)
            }
        },
        components: {
            Loading
        },
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"

    .news-list
        width 100%
        .news-content
            .news-item
                display flex
                margin 0 10px
                padding 20px 0
                border-bottom 1px solid $color-border
                .content
                    flex 1
                    .title
                        margin-bottom 10px
                        line-height 20px
                        font-size $font-size-title
                        color $color-text
                    .image-list
                        display flex
                        width 100%
                        .image-item
                            flex 1
                            margin-right 3px
                            &:last-child
                                margin-right 0
                            img 
                                width 100%
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
</style>

