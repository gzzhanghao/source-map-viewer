<template>
  <div :class="$.container">
    <div :class="$.menu" v-show="active">
      <slot />
    </div>
    <BurgerIcon :class="$.button" :active="active" @click.native="toggle" />
  </div>
</template>

<script>
  import BurgerIcon from './BurgerIcon'

  export default {

    components: { BurgerIcon },

    data() {
      return {

        active: false,
        //
      }
    },

    created() {
      this.checkClose = this.checkClose.bind(this)
    },

    mounted() {
      window.addEventListener('mousedown', this.checkClose)
    },

    beforeDestroy() {
      window.removeEventListener('mousedown', this.checkClose)
    },

    methods: {

      toggle() {
        this.active = !this.active
      },

      checkClose(event) {
        if (!this.$el.contains(event.target)) {
          this.active = false
        }
      },
    },
  }
</script>

<style module="$">
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding-top: 28px;
    background: lightgray;
  }

  .button {
    position: fixed;
    top: 8px;
    right: 12px;
    width: 16px;
    height: 12px;
  }
</style>
