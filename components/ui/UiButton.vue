<script lang="ts" setup>
interface Props {
  loading?: boolean;
  disabled?: boolean;
}
const props = defineProps<Props>()
const emit = defineEmits<{(e: 'click'): void }>()
</script>

<template>
  <button :disabled="props.disabled" @click="emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

button {
  background: $primary-100;
  color: #ffffff;
  outline: none;
  border: transparent;
  text-align: center;
  width: 100%;
  height: 40px;
  cursor: pointer;
}
</style>
