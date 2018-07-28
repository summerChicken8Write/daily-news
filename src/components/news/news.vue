<template>
    <div class="news">
        <swiper :hotSpot="hotSpot"></swiper>
    </div>
</template>

<script>
    import {getNews} from 'api/getNews'
    import Swiper from 'base/swiper/swiper'

    const SUCCESS = 'success'

    export default {
        data() {
            return {
                hotSpot: []
            }
        },
        created() {
            this._getNews()
        },
        methods: {
            _getNews() {
                getNews().then((res) => {
                    if(res.message === SUCCESS) {
                        this.hotSpot = res.data.pc_feed_focus
                        console.log(this.hotSpot)
                    }
                })
            },
        },
        components: {
            Swiper,
        },
    }
</script>

<style lang="stylus">

</style>
