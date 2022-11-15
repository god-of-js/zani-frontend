<script lang="ts" setup>
const slots = useSlots()

interface Emits {
  (e: 'enter'): void;
  (e: 'update:modelValue', p: string): void;
}
const emit = defineEmits<Emits>()

interface Props {
  autofocus?: boolean;
  disabled?: boolean;
  error?: string;
  errors?: string[];
  label?: string;
  maxlength?: number;
  minlength?: number;
  modelValue: string | number | undefined | null;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'tel';
  isDarkBackground?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  autofocus: undefined,
  disabled: undefined,
  error: undefined,
  errors: () => [],
  label: undefined,
  maxlength: undefined,
  minlength: undefined,
  name: undefined,
  placeholder: undefined,
  required: false,
  type: 'text',
  validator: undefined,
  modelValue: undefined
})

function update (e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <UiField
    :name="props.name"
    :label="props.label"
    :required="props.required"
    :error="props.error"
    :errors="props.errors"
    :class="{ 'field-with-icon': slots.icon }"
    :is-dark-background="props.isDarkBackground"
  >
    <div class="input-layout-container">
      <input
        :name="props.name"
        class="ui-input"
        :type="type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :disabled="props.disabled"
        :required="props.required"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        @input="update"
        @keydown.enter="emit('enter')"
      >
    </div>
  </UiField>
</template>

<style lang="scss" scoped>
input.ui-input {
  padding: 4px 16px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  height: 28px;
  align-self: stretch;
  border: 1px solid #000;
  background: #ffffff;
  outline: none;
}

::-webkit-input-placeholder {
  color: #000; /* Edge */
}
:-ms-input-placeholder {
  color: #000; /* Internet Explorer 10-11 */
}
::placeholder {
  color: #000;
}
</style>
