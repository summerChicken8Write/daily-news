<template>
    <transition name="slider">
        <div class="news-detail">
            news-detail
        </div>
    </transition>
</template>

<script>
    export default {
        created() {
            console.log()
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
</style>

