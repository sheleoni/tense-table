<template>
    <div id="app">
        <MenuBar />
        <router-view />
    </div>
</template>
  
<script>

import MenuBar from '@/components/MenuBar.vue';

export default {
    name: 'App',
    components: {
        MenuBar,
    }
}
</script>
<style>
@import 'normalize.css/normalize.css';
</style>
  
<style src="@/assets/styles.css">
  
  