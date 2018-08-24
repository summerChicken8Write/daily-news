<template>
    <transition name="drop">
        <div class="tip" v-show="showFlag" @click.stop="hide">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                showFlag: false
            }
        },
        props: {
            delay: {
                type: Number,
                default: 2000
            }
        },
        methods: {
            hide() {
                this.showFlag = false
            },
            show() {
                this.showFlag = true
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.hide()
                }, this.delay)
            },
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

    .tip
        position fixed
        top 100px
        width 100%
        height 30px
        line-height 30px
        text-align center
        z-index 500
        background $color-desc
        &.drop-enter-active, &.drop-leave-active
            transition all 0.3s
        &.drop-enter, &.drop-leave-to
            transform translate3d(0, -100%, 0)
            opacity 0
</style>

