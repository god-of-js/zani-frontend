<script lang="ts" setup>
interface Props {
  label: string;
  value?: string | number | undefined | null;
  subtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  subtitle: undefined
})
</script>

<template>
  <div class="option" :class="{ 'has-subtitle': props.subtitle }">
    <div class="b-title">
      {{ props.label }}
    </div>
    <div v-if="props.subtitle" class="b-subtitle">
      {{ props.subtitle }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.option {
  display: flex;
  gap: px(8);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.b-title,
.b-subtitle {
  flex-basis: auto;
  flex-grow: 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-weight: 400;
  max-width: auto;
  flex-shrink: 1;
  color: var(--color-gray-900);
}
</style>
