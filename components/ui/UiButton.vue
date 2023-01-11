<script lang="ts" setup>
interface Props {
  loading?: boolean;
  disabled?: boolean;
  fitContent?: boolean;
}
const props = defineProps<Props>()
const emits = defineEmits<{(e: 'click'): void }>()
</script>

<template>
  <button :disabled="props.disabled || props.loading" :class="{'fit-content': props.fitContent }" @click="emits('click')">
    <span v-if="loading">Loading...</span>
    <slot v-else />
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
  padding: 0px 11px;
  cursor: pointer;

  &.fit-content {
    width: fit-content;
  }
}
</style>
