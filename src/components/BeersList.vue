<template lang="html">
  <div>
      <list-item v-for="(beer, index) in beers" :beer="beer" :key="index"></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'
export default {
  name: 'beers-list',
  props: ['beers'],
  components: {
    "list-item": ListItem
  }
}
</script>

<style lang="css" scoped>
</style>
