<template>
  <a href="javascript:" :class="[$.container, { [$.active]: active }]">
    <span v-for="i in 4" :class="$.line"></span>
  </a>
</template>

<script>
  export default {

    props: {

      active: Boolean,
      //
    },
  }
</script>

<style module="$">
  .line {
    position: absolute;
    height: 2px;
    width: 100%;
    background: gray;
    border-radius: 1px;
    transition: .2s ease-in-out;
  }

  .line:nth-child(2),
  .line:nth-child(3) {
    top: 50%;
    margin-top: -1px;
  }

  .line:nth-child(4) {
    bottom: 0;
  }

  .active .line:nth-child(1),
  .active .line:nth-child(4) {
    opacity: 0;
  }

  .active .line:nth-child(2) {
    transform: rotate(45deg);
  }

  .active .line:nth-child(3) {
    transform: rotate(-45deg);
  }
</style>
