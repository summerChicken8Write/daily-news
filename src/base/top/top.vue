<template>
    <div class="top" @click="top" ref="top">
        <p class="text">top</p>
    </div>    
</template>

<script>
    export default {
        created() {
            this.mouseOver
        },
        methods: {
            top() {
                this.$emit("top")
                console.log('top')
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

    .top
        position fixed
        bottom 20px
        right 20px
        width 50px
        height 40px
        border-radius 10px
        line-height 40px
        text-align center
        background $color-background-g
        opacity 0.4
        z-index 100
    &:hover
        background $color-background
</style>

