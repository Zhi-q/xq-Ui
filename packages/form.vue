<template>
  <div class="xq-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'XqForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss">
.xq-input {
  width: 180px;
}
</style>
