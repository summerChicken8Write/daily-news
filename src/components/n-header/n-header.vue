<template>
    <div class="n-header">
        <div class="message">
            <i class="icon icon-star-empty" @click="toCollection"></i>
        </div>
        <div class="title" @click="refresh">
            <h1 class="text">每日新闻</h1>
            <i class="icon icon-spinner11"></i>
        </div>
        <div class="search">
            <i class="icon icon-search" @click="toSearch"></i>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toCollection() {
                this.$router.push({path:'/collection'})
            },
            toSearch() {
                this.$router.push({path:'/search'})
            },
            refresh() {
                this.$router.push({path:'/news'})
                window.location.reload()
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    
    .n-header
        display flex
        height 60px
        line-height 60px
        text-align center
        background $color-background
        color $color-title
        .message
            flex : 0 0 40px
            padding-left 15px
        .title
            flex 1
            font-size $font-size-title-l
            .text
                display inline-block
                vertical-align bottom
                margin-left 18px
            .icon 
                margin-left 4px
                font-size $font-size-text
        .search
            flex 0 0 40px
            padding-right 15px
</style>
