<template>
    <transition name="menu">
    <div class="menu">
        <div class="menu-list">
            <div class="back" @click="back">
                <span class="icon icon-arrow_lift"></span>
            </div>
            <div class="user">
                <div class="avatar">
                    头像
                    <img src="" alt="">
                </div>
                <div class="isLogin">用户名-注销</div>
                <div class="noLogin">登录</div>
            </div>
            <ul>
                <li>
                    <span class="icon icon-star-empty"></span>
                    <span>我的收藏</span>
                </li>
            </ul>
        </div>
    </div>
    </transition>
</template>

<script>
    export default {
        methods: {
            back() {
                this.$router.back()
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    .menu-enter-active, .menu-leave-active
        transition all 0.3s
    .menu-enter, .menu-leave-to
        transform translate3d(-100%, 0, 0)
    .menu
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background $color-background
</style>

