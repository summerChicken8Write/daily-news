<template>
    <div class="search-list" v-show="searchHistory.length">
        <ul>
            <li v-for="item in searchHistory" @click="selectItem(item)" v-show="item.length">
                <span>{{item}}</span>
                <span class="icon">
                    <i class="icon icon-close" @click.stop="deleteOne(item)"></i>
                </span>
            </li>
        </ul>
        <div class="clear" @click="clearSearchHistory">
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

</style>
