<template>
  <div
    class="dropZone"
    @dragover.prevent
    @drop.prevent="onDrop"
  >
    <slot />
  </div>
</template>

<script>
  export default {

    methods: {

      onDrop(event) {
        this.draggingOver = false
        this.$emit('drop', event)
      },
    },
  }
</script>
