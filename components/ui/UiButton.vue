<script lang="ts" setup>
interface Props {
  loading?: boolean;
  disabled?: boolean;
}
const props = defineProps<Props>()
</script>

<template>
  <button :disabled="props.disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  background: #000;
  color: #ffffff;
  outline: none;
  border: transparent;
}
</style>
