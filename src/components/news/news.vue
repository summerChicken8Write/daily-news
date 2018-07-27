<template>
    <div class="news">
        news
    </div>
</template>

<script>
    import {getNews} from 'api/getNews'

    const SUCCESS = 'success'

    export default {
        created() {
            this._getNews()
        },
        methods: {
            _getNews() {
                getNews().then((res) => {
                    if(res.message === SUCCESS) {
                        console.log(res.data)
                    }
                })
            },
        },
    }
</script>

<style lang="stylus">

</style>
