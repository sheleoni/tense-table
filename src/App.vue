<template>
  <div id="app">
    <MenuBar />
    <TenseTable />
  </div>
</template>

<script>
import TenseTable from './components/TenseTable.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'App',
  components: {
    TenseTable,
    MenuBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: orange;
  margin-top: 60px;
}
</style>
