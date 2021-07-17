<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-container>
      <el-header height="60px">
        <NavMenu></NavMenu>
      </el-header>
      <el-container>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- <Cart></Cart>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Cart from "@/components/Cart.vue";

import NavMenu from "@/components/menu/NavMenu.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // Cart,
    NavMenu,
  },
};
</script>
<style >
</style>
