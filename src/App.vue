<template>
  <div id="app">
    <!-- <svg>
        <use xlink:href="#icon-01" />
      </svg> -->
    <Home></Home>
    <!-- |
      <router-link to="/about">
        <svg-icon icon-class="02"></svg-icon>
        About</router-link
      > -->
  </div>
</template>
<script>
// import '@/icons/svg/01.svg' 添加自动导入
import Home from '@/views/Home.vue';
export default {
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
