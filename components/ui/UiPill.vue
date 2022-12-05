<script lang="ts" setup>
type Type = 'new' | 'pre-order' | 'discount';
interface Props {
  type?: Type;
}
const props = defineProps<Props>()

const textObj: Record<Type, string> = {
  new: 'new',
  'pre-order': 'pre-order',
  discount: 'discount'
}

const pillText = computed(() => {
  if (props.type) {
    return textObj[props.type]
  }
})
</script>

<template>
  <div class="pill">
    <slot>{{ pillText }}</slot>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';
.pill {
  background: $primary-100;
  color: #ffffff;
  width: fit-content;
  padding: 8px 12px;
  font-size: 10px;
}
</style>
