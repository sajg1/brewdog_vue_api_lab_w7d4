<template lang="html">
  <div id="app">
    <!-- <router-link :to="{ name: 'home'}">Home</router-link>
    <beers-list :beers="beers"></beers-list> -->
    <router-view id="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      beers: {}
    }
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => this.beers=beers)
  },
}
</script>


<style lang="css" scoped>
</style>
