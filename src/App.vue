<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-link to="/home">Go to Bar</router-link> -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive">1111</router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">111111</router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="css">
:root {
    --color-main: red;
    --centered: {
        display: flex;
        align-items: center;
        justify-content: center;
        /* text-align: center; */
    };
}

html, body {
    width: 100%;
    height: 100%;
    /* background: var(--color-main); */
    @apply --centered;
}
#app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
}
</style>
