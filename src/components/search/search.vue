<template>
    <transition name="slider" >
        <div class="search">
            <div class="header">
                <i class="icon icon-arrow_lift" @click="back"></i>
                <h1 class="title">搜索</h1>
            </div>
            <div class="search-wrapper">
                <search-box @query="onQueryChange" @search="_search" ref="searchBox"></search-box>
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
                    <h1 class="title">搜索历史：</h1>
                    <search-list :searchHistory="searchHistory" @select="addQuery"></search-list>
                </div>
            </div>
            <scroll class="search-result" ref="searchResult" v-show="query" :data="result" :pullup="pullup" @scrollToEnd="searchMore">
                <news-list :allNews="result"></news-list>
            </scroll>
        </div>
    </transition>
</template>

<script>
    import {getHotKey} from 'api/search'
    import {search} from 'api/search'
    import SearchBox from 'base/search-box/search-box'
    import NewsList from 'components/news-list/news-list'
    import Scroll from 'base/scroll/scroll'
    import SearchList from 'base/search-list/search-list'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                hotKey: [],
                query: '',
                result: [],
                offset: 0,
                pullup: true,
            }
        },
        computed: {
            ...mapGetters([
                'searchHistory'
            ])
        },
        created() {
            this._getHotkey()
        },
        methods: {
            back() {
                this.$router.back()
            },
            addQuery(query) {
                this.$refs.searchBox.setQuery(query)
            },
            onQueryChange(newQuery) {
                this.query = newQuery
            },
            searchMore() {
                this.offset += 10 
                search(this.query, this.offset).then((res) => {
                    this.result = this.result.concat(res.data)
                    console.log(this.result)
                })
            },
            _getHotkey() {
                getHotKey().then((res) => {
                    this.hotKey = res.data
                })
            },
            _search() {
                this.offset = 0
                this.$refs.searchResult.scrollTo(0, 0)
                search(this.query, this.offset).then((res) => {
                    this.result = res.data
                })
                this.saveSearchHistory(this.query)
            },
            ...mapActions([
                'saveSearchHistory'
            ]),
        },
        watch: {
            query(newQuery) {
                this._search()
            }
        },
        components: {
            SearchBox,
            NewsList,
            Scroll,
            SearchList
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
            .search-wrapper
                height 40px
                margin-bottom 20px
                line-height 40px
                background $color-background-g
            .shortcut-wrapper
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
                .search-history
                    margin 0 25px
                    .title
                        margin-bottom 10px
                        text-align center
                        font-size $font-size-title
            .search-result
                height 100%
                overflow hidden
</style>

