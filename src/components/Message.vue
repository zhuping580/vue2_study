<template>
<transition name="fade">
    <div class="message-box" v-if="show">
    <slot></slot>
    <span @click="$emit('update:show', false)" class="message-box-close"
      >X
    </span>
  </div>
</transition>

</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(newValue) {
        if (newValue === true) {
          setTimeout(() => {this.$emit('update:show', false)}, 2000) 
        }
      }
    }
  }
};
</script>

<style>
.message-box {
  padding: 10px 20px;
  background: #4fc08d;
  border: 1px solid #42b983;
}
.message-box-close {
  float: right;
  color: red;
}
.message-box-close:hover {
  cursor: pointer;
}
/* 定义过度动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>