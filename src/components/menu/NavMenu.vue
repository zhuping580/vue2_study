<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="title">测试管理平台</div>
      </el-col>
      <el-col :span="12" :offset="1">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="casemange">用例管理</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
				this.$router.push(key)
      }
    }
  }
</script>

<style lang="scss" scoped>
.title {
  // 设置行高可让文字垂直居中
  line-height: 60px;
}

.el-menu-demo {
  // 隐藏demo的下滑线
  border-bottom-color: #ffffff !important;
  .el-menu-item {
    // 隐藏item的下划线
    border-bottom-color: #ffffff !important;
  }
}
</style>>
