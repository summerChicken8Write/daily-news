<template>
    <div class="loading">
        <img src="./loading.gif" alt="">
        <p class="desc">{{title}}</p>
    </div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '正在加载中...'
		}
	}
}
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"

    .loading
        width: 100%
        text-align: center
        img
            width: 24px
            height: 24px
        .desc
            line-height: 20px
            font-size: $font-size-small
            color: $color-text
</style>