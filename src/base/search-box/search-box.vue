<template>
    <div class="search-box">
        <i class="icon icon-search" @click="search"></i>
        <input class="box" ref="search" :placeholder="placeholder" v-model="query"></input>
        <i class="icon icon-cancel-circle" @click="clear"></i>
    </div>
</template>

<script>
    import {debounce} from 'common/js/util'

    export default {
        props: {
            placeholder: {
                type: String,
                default: '请输入搜索关键词'
            }
        },
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                this.$emit('search', this.query)
            },
            clear() {
                this.query = ''
            }, 
            blur() {
                this.$refs.search.blur()
            },
            setQuery(query) {
                this.query = query
            }
        },
        created() {
            // 限制刷新时间，减少请求次数
            this.$watch('query', debounce((newQuery) => {
                this.$emit('query', newQuery)
            }, 600))
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

    .search-box
        display flex
        align-items center
        width 100%
        box-sizing border-box
        height 40px
        padding 6px 10px
        .icon-search
            font-size $font-size-title-l
            color $color-background
        .box
            flex 1
            margin 0 5px
            height 100%
            border-radius 6px
            color $color-text
            font-size $font-size-text
            &::placeholder
                color $color-desc
        .icon-cancel-circle
            font-size $font-size-title-l
            color $color-background
</style>

