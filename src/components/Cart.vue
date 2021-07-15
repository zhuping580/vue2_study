<template>
  <div>
    <!-- 特性、属性值绑定使用v-bind指令 -->
    <h2 v-bind:title="title">
      <!-- 插值语法 -->
      {{ title }}
    </h2>
    <!-- 条件渲染 --> 
    <p v-if="courses.length == 0">没有任何课程信息</p> 
    <!-- 列表渲染 --> 
    <ul>
      <li v-for="c in courses" :key="c.name">
        {{ c.name }} - {{ c.price | currency('￥') }}
      </li> 
    </ul>
  </div>
</template>

<script>
import { getCourses } from "@/api/course";

export default {
  data() {
    return {
      title: '购物车',
      courses: [],
    }
  },
  async created() {
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await getCourses();
    this.courses = courses;
  },
  filters: {
    currency(value, symbol = "￥") {
      return symbol + value;
    }
  }
}
</script>

<style>

</style>