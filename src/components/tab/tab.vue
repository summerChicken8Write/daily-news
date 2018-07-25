<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/news">
            <span class="tab-link">热门新闻</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/videos" @click="moveToVideo">
            <span class="tab-link">新鲜视频</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        methods: {
            moveToVideo() {
                
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
                border none
            .tab-link
                padding-bottom 5px
                color $color-text
            &.active
                .tab-link
                    color $color-active
                    border-bottom 2px solid $color-active
</style>
