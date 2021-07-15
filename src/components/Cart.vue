<template>
  <div>
    <!-- 插槽实现内容分发 --> 
    <message :show.sync="show">新增课程成功！</message>
    <!-- 特性、属性值绑定使用v-bind指令 -->
    <h2 v-bind:title="title">
      <!-- 插值语法 -->
      {{ title }}
    </h2>
    <!-- 表单输入绑定 --> 
    课程名称：<input v-model="cname" type="text" />
    课程价格：<input v-model="price" type="text" v-on:keydown.enter="addCourse"/>
    <button @click="addCourse">添加课程</button>
    <List :courses="courses" @removeC="removeCourse"></List>
  </div>
</template>

<script>
import { getCourses } from "@/api/course";
import List from '@/components/List.vue';
import Message from '@/components/Message.vue';

export default {
  components: {
    List,
    Message
  },
  // v-model默认转换是:value和@input，如果想要修改这个行为，可以通过定义model选项
  // model: { prop: 'value', event: 'change' },
  data() {
    return {
      courses: [],
      course: '',
      title: '购物车',
      cname: '',
      price: '',
      show: false
    }
  },
  // 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
  beforeCreate() {
    console.log('beforeCreate', this.title);
  },
  // 组件初始化完毕，各种数据可以使用，常用于异步数据获取
  async created() {
    console.log('created', this.title);
    // 组件实例已创建，由于未挂载，dom不存在
    const courses = await getCourses();
    this.courses = courses;
  },
  // 未执行渲染、更新，dom未创建
  beforeMount() {
    console.log('beforeMount', this.$el);
  },
  // 初始化结束，dom已创建，可用于获取访问数据和dom元素
  mounted() {
    console.log('mounted' + this.$el);
  },
  // 更新前，可用于获取更新前各种状态
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // 更新后，所有状态已是最新
  updated() {
    console.log('updated');
  },
  // 销毁前，可用于一些定时器或订阅的取消
  beforeDestroy() {
    console.log('beforeDestroy');
  },
   // 组件已销毁，作用同上
  destroyed() {
    console.log('destroyed');
  },
  
  methods: {
    addCourse() {
      this.courses.find(this.courses => this.courses.name === this.cname)
      this.courses.push({ name: this.cname, price: this.price })
      this.show = true
    },
    removeCourse(c) {
      const index = this.courses.indexOf(c);
      this.courses.splice(index, 1)
    },
    findCourse(c, cname) {
      return c.name === cname
    }
  }
}
</script>

<style>
.active {
  background-color: #ddd;
}

</style>