<template lang="html">
  <div>
    <Header title="List of Beers"></Header>
    <beers-list :beers="beersList"></beers-list>
  </div>
</template>

<script>

import Header from '@/components/Header';
import BeerList from '@/components/BeersList';

export default {
  data() {
    return {
      beersList: {}
    }
  },
  props: ['beers'],
  components: {
    Header,
    'beers-list': BeerList
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => this.beersList=beers)
  },
}
</script>

<style lang="css" scoped>
</style>
