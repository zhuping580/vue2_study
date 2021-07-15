<template>
  <div>
    <!-- 条件渲染 --> 
    <p v-if="courses.length == 0">没有任何课程信息</p> 
    <!-- 列表渲染 --> 
    <ul>
      <li v-for="c in courses" 
      :key="c.name"
      :class="{active: (selectedCourse === c)}"
      @click="selectedCourse = c"
      >
        {{ c.name }} - {{ c.price | currency('￥') }}
        <button @click="removeCourse(c)">删除</button>
      </li> 
    </ul>
    <span>课程总数：{{ courses.length + ' 门' }}&nbsp;</span>
    <span>计算属性: {{ total }}&nbsp;</span>
    <span>监听器: {{ totalCount }}</span>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 保存选中项 
      selectedCourse: '',
    }
  },
  // 计算属性适合一个数据受多个数据影响,计算属性有缓存性
  computed: { 
    total() { 
      return this.courses.length + '门' 
    } 
  },
  // 下面这种不能生效，因为初始化时不会触发 
  // watch: { 
  //   courses(newValue) { 
  //   this.totalCount = newValue.length + '门' 
  //   } 
  // },
  // 监听器适合一个数据影响多个数据,监听器适合执行异步操作或较大开销操作的情况
  watch: {
    courses: {
      immediate:  true,
      // deep: true
      handler(newValue) {
        this.totalCount = newValue.length + '门'
      }
    }
  },
  filters: {
    currency(value, symbol = "￥") {
      return symbol + value;
    }
  },
  methods: {
    removeCourse(c) {
      console.log(c);
      this.$emit('removeC', c)
    }
  },
}
</script>

<style>

</style>