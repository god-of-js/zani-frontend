<script lang="ts" setup>
const slots = useSlots()

interface Emits {
  (e: 'enter'): void;
  (e: 'update:modelValue', p: string): void;
}
const emit = defineEmits<Emits>()

interface Props {
  disabled?: boolean;
  label?: string;
  maxlength?: number;
  minlength?: number;
  modelValue: string | number | undefined | null;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'tel';
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
@import '~/assets/css/colors.scss';
input.ui-input {
  padding: 8px 16px;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  width: 100%;
  height: 40px;
  display: block;
  box-sizing: border-box;
  border: 1px solid $primary-100;
  background: #ffffff;
  outline: none;
  &::placeholder {
    color: $primary-75;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
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
