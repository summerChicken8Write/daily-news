<template>
    <div class="n-header">
        <div class="message">
            <i class="icon icon-user-tie"></i>
        </div>
        <div class="title">
            <h1 class="text">每日新闻</h1>
            <i class="icon icon-spinner11"></i>
        </div>
        <div class="search">
            <i class="icon icon-search"></i>
        </div>
    </div>
</template>

<script>
</script>

<style lang="stylus">
    @import "~common/stylus/variable"
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
            font-size $font-size-title
            .text
                display inline-block
                vertical-align top
                margin-left 18px
            .icon 
                margin-left 8px
        .search
            flex 0 0 40px
            padding-right 15px
</style>
