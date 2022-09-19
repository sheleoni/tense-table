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

<style src="../src/assets/styles.css">

