<template>
  <div id="app">
    <n-header></n-header>
    <tab></tab>
    <keep-alive>
  		<router-view/>
  	</keep-alive>
  </div>
</template>

<script>
import NHeader from 'components/n-header/n-header'
import Tab from 'components/tab/tab'

export default {
  components: {
    NHeader,
    Tab
  }
}
</script>

<style lang="stylus">
</style>
