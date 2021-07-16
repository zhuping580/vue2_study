<template>
  <div id="app">
    <div id="nav">
      <!-- <svg>
        <use xlink:href="#icon-01" />
      </svg> -->
      <router-link to="/">
        <svg-icon icon-class="01"></svg-icon>
        Home</router-link
      >
      |
      <router-link to="/about">
        <svg-icon icon-class="02"></svg-icon>
        About</router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
// import '@/icons/svg/01.svg' 添加自动导入
export default {};
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
