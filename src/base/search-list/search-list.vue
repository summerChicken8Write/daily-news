<template>
    <div class="search-list" v-show="searchHistory.length">
        <h1 class="title">搜索历史：</h1>
        <transition-group name="move" tag="ul">
            <li class="search-item" v-for="item in searchHistory" :key="item" @click="selectItem(item)" v-show="item.length">
                <span>{{item}}</span>
                <span class="icon">
                    <i class="icon icon-close" @click.stop="deleteOne(item)"></i>
                </span>
            </li>
        </transition-group>
        <div class="clear" @click="clearSearchHistory" v-show="searchHistory.length">
            <i class="icon icon-bin"></i>
            <span>清空全部记录</span>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: {
            searchHistory: {
                type: Array,
                default: []
            }
        },
        methods: {
            selectItem(item) {
                this.$emit('select', item)
            },
            deleteOne(item) {
                this.$emit('delete', item)
            },
            ...mapActions([
                'clearSearchHistory'
            ])
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    
    .search-list
        .title
            margin-bottom 10px
            text-align center
            font-size $font-size-title
        .search-item
            height 30px
            line-height 30px
            font-size $font-size-text
            &.move-enter-active, &.move-leave-active
                transition all 0.3s
            &.move-enter, &.move-leave-to
                opacity 0
                height 0
            .icon
                float right
                height 25px
                line-height 25px
        .clear
            margin-top 20px
            padding-bottom 30px
            text-align center
</style>
