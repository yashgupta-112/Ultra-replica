<template>
<div id="main">
    
<NavBar v-show="['/','/home','/admin','/contact','/pricing','/news','/login','/admin-panel'].includes($route.path)"></NavBar>
<router-view></router-view>
<FooterCom v-if="['/','/home','/admin','/contact','/pricing','/news','/login','/admin-panel'].includes($route.path)"></FooterCom>

</div>
</template>

<script>
import FooterCom from "./components/FooterCom.vue";
export default {
    name: "App",
    components: { FooterCom }
}
</script>

<style >

</style>