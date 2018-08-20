<template>
    <div class="search-list" v-show="searchHistory.length">
        <ul>
            <li v-for="item in searchHistory" @click="selectItem(item)" v-show="item.length">
                <span>{{item}}</span>
                <span class="icon">
                    <i class="icon icon-close"></i>
                </span>
            </li>
        </ul>
        <div class="clear">
            <i class="icon icon-bin"></i>
            <span>清空全部记录</span>
        </div>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"

</style>
