<template>
  <transition name="fade">
    <div v-if="display" :class="$.container">
      <span :class="[$.content, { [$.suc]: type === 'suc', [$.err]: type === 'err' }]">{{msg}}</span>
    </div>
  </transition>
</template>

<script>
  export default {

    computed: {

      display() {
        return this.$ctrl.tips.display
      },

      msg() {
        return this.$ctrl.tips.msg
      },

      type() {
        return this.$ctrl.tips.type
      },
    }
  }
</script>

<style module="$">
  .container {
    position: fixed;
    top: 50px;
    width: 100%;
    text-align: center;
    z-index: 200;
  }
  .content {
    position: relative;
    padding: 6px 20px;
    color: #fff;
    background: #55D041;
    border-radius: 2px;
  }
  .content.err {
    background: #FB6500;
  }
</style>
