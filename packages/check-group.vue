<template>
  <div class="xq-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XqCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
