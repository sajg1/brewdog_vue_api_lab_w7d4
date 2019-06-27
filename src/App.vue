<template lang="html">
  <div id="app">
    <nav>
    <router-link :to="{ name: 'home'}">Home</router-link>
    <router-link :to="{ name: 'beers'}">Beers</router-link>
    </nav>
    <router-view id="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>


<style lang="css" scoped>
  nav {
    display: flex;
    justify-content: left;
    width: 50vw;
    margin: 0 auto;
  }

  a {
  margin: 0 20px;
}
</style>
