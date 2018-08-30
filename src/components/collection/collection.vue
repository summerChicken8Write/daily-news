<template>
    <transition name="slider" >
        <div class="collection">
            <div class="header">
                <i class="icon icon-arrow_lift" @click="back"></i>
                <h1 class="title">我的收藏</h1>
            </div>
            <div class="desc" v-show="!favoriteList.length">
                <span>暂无收藏</span>
            </div>
            <scroll class="collection-list" ref="collectionList" v-show="favoriteList" :data="favoriteList">
                <news-list :allNews="favoriteList" :showLoading="showLoading" @select="selectNews"></news-list>
            </scroll>
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import Scroll from 'base/scroll/scroll'
    import NewsList from 'components/news-list/news-list'

    export default {
        data() {
            return {
                showLoading: false
            }
        },
        computed: {
            ...mapGetters([
                'favoriteList'
            ])
        },
        methods: {
            back() {
                this.$router.back()
            },
            selectNews(item) {
                this.$router.push({
                    path: `/collection/${item.group_id}`
                })
                this.setNews(item)
            },
            ...mapMutations({
                setNews: 'SET_NEWS'
            })
        },
        components: {
            Scroll,
            NewsList
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

        .slider-enter-active, .slider-leave-active
            transition all 0.3s
        .slider-enter, .slider-leave-to
            transform translate3d(100%, 0, 0)
        .collection
            position fixed
            z-index 100
            top 0
            bottom 70px
            left 0
            right 0
            background $color-title
            .header
                position relative
                height 60px
                line-height 60px
                text-align center
                background $color-background
                color $color-title
                .icon
                    position absolute
                    top 22px
                    left 22px
                    font-size $font-size-title
                .title
                    font-size $font-size-title-l     
            .desc
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
                text-align center
            .collection-list
                height 100%
                overflow hidden    
</style>

