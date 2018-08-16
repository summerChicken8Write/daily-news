<template>
    <transition name="slider" >
        <div class="search">
            <div class="header">
                <i class="icon icon-arrow_lift" @click="back"></i>
                <h1 class="title">搜索</h1>
            </div>
            <div class="search-wrapper">
                <search-box @query="onQueryChange"></search-box>
            </div>
            <div class="shortcut-wrapper" v-show="!query">
                <div class="hot-key">
                    <h1 class="title">热门搜索：</h1>
                    <ul>
                        <li class="item" v-for="item in hotKey">
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
                <div class="search-history">
                    search-history
                </div>
            </div>
            <div class="search-result" v-show="query">
                <news-list :allNews="result"></news-list>
            </div>
        </div>
    </transition>
</template>

<script>
    import {getHotKey} from 'api/search'
    import {search} from 'api/search'
    import SearchBox from 'base/search-box/search-box'
    import NewsList from 'components/news-list/news-list'

    export default {
        data() {
            return {
                hotKey: [],
                query: '',
                result: []
            }
        },
        created() {
            this._getHotkey()
        },
        methods: {
            back() {
                this.$router.back()
            },
            onQueryChange(newQuery) {
                this.query = newQuery
            },
            _getHotkey() {
                getHotKey().then((res) => {
                    this.hotKey = res.data
                })
            },
            _search() {
                search(this.query).then((res) => {
                    this.result = res.data
                    console.log(this.result)
                })
            },
        },
        watch: {
            query() {
                this._search()
            }
        },
        components: {
            SearchBox,
            NewsList
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

        .slider-enter-active, .slider-leave-active
            transition all 0.3s
        .slider-enter, .slider-leave-to
            transform translate3d(100%, 0, 0)
        .search
            position fixed
            z-index 100
            top 0
            bottom 0
            left 0
            right 0
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
            .search-wrapper
                height 40px
                line-height 40px
                background $color-background-g
            .hot-key
                margin 15px 7px
                text-align center
                .title
                    margin-bottom 10px
                    font-size $font-size-title
                .item
                    display inline-block
                    margin-right 6px
                    margin-bottom 15px
                    padding 6px 5px
                    background $color-border
                    font-size $font-size-text
</style>

