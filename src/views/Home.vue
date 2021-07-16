<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-container>
      <el-header height="60px">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main>Main</el-main>
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
import Menu from "@/components/menu/Menu.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // Cart,
    Menu,
  },
};
</script>
<style >
.el-header {
  background-color:#4f5358;
}

</style>
