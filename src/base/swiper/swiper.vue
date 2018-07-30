<template>
    <div class="swiper" v-if="hotSpot.length">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-item" v-for="(item, index) in hotSpot" :key="index">
                <img :src="item.image_url" alt="">
                <div class="title-wrapper">
                    <h1 class="title">{{item.title}}</h1>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </div>
</template> 

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    // import Swiper from 'vue-awesome-swiper'
    // import SwiperSlide from 'vue-awesome-swiper'

    export default {
        props: {
            hotSpot: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                // API地址：http://www.swiper.com.cn/api/index2.html
                swiperOption: {
                    // 自动播放
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    // 循环播放
                    loop: true,
                    // 过渡效果
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    // 分页器
                    // pagination :{
                    //     el: '.swiper-pagination',
                    //     clickable :true,
                    //     dynamicBullets: true,
                    // },
                    // 前进后退按钮
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    //     hideOnClick: true,
                    // },
                    // 滚动条
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        hide: true,
                        draggable: true,
                    },
                },
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)  // 这段代码会报错
        },
        components: {
            swiper,
            swiperSlide
        },
    }
</script>

<style lang="stylus">
    @import "~common/stylus/variable"
    
    .swiper
        .swiper-item
            position reletive
            img
                display block
                height 200px
                width 100%
            .title-wrapper
                position absolute
                left 0
                bottom 0
                width 100%
                height 50px
                line-height 50px
                background linear-gradient(to bottom, rgba(7, 17, 27, 0.1), rgba(7, 17, 27, 0.9))
                .title
                    box-sizing border-box
                    color $color-title
                    width 100%
                    padding 0 10px
                    text-align right
                    overflow hidden
                    text-overflow ellipsis
</style>

