<template>
  <div :class="$.container">
    <a href="javascript:" :class="$.button" @click="toggleMenu" />
  </div>
</template>

<script>
  export default {

    data() {
      return {
        menuOpen: false,
      }
    },

    methods: {

      toggleMenu() {
        this.menuOpen = !this.menuOpen
      },

      closeMenu() {
        this.menuOpen = false
      },
    },
  }
</script>

<style module="$">
  .container {
    position: fixed;
  }
  .button:before {
    content: 'menu';
  }
</style>
