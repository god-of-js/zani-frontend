<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  error?: string;
  errors?: string[];
  label?: string;
  name?: string;
  hint?: string;
  isDarkBackground?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  errors: () => [],
  label: undefined,
  name: undefined,
  hint: undefined,
  isDarkBackground: false
})

const fieldErrors = computed(() => {
  return props.error ? props.errors.concat(props.error) : props.errors
})
</script>

<template>
  <div class="ui-field">
    <label
      v-if="label"
      :for="name"
      class="ui-label"
      :class="{ 'is-dark-background': props.isDarkBackground }"
    >
      {{ label }}
    </label>
    <div class="ui-control">
      <slot :field-errors="fieldErrors" />
      <p v-if="hint" class="help">
        {{ hint }}
      </p>
      <p v-for="(errorMsg, i) in fieldErrors" :key="i" class="help is-danger">
        {{ errorMsg }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-label {
  flex-grow: 1;
  height: 20px;
  font-style: normal;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: px(6);
  display: block;
}

.ui-label.is-dark-background {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
}
</style>
