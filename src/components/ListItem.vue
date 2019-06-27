<template lang="html">
  <li v-on:click="handleClick">{{beer.name}}</li>
</template>

<script>
export default {
  name: "list-item",
  props: ['beer'],
  methods: {
    handleClick() {
      
    }
  }
}
</script>

<style lang="css" scoped>
</style>
