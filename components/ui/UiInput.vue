<script lang="ts" setup>
const slots = useSlots()

interface Emits {
  (e: 'enter'): void;
  (e: 'update:modelValue', p: string): void;
  (e: 'clickLeft'): void;
  (e: 'clickRight'): void;
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
    v-slot="{ fieldErrors }"
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
        :class="{
          'is-danger': fieldErrors.length > 0,
          'has-icon': slots.icon,
          'has-icon-right': slots.iconRight,
        }"
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
      <div
        v-if="slots.icon"
        class="icon-left icon-size-sm"
        @click="emit('clickLeft')"
      >
        <slot name="icon" />
      </div>
      <div
        v-if="slots.iconRight"
        class="icon-right icon-size-sm"
        @click="emit('clickRight')"
      >
        <slot name="iconRight" />
      </div>
    </div>
  </UiField>
</template>

<style lang="scss" scoped>
.input-layout-container {
  position: relative;
}

input.ui-input {
  padding: px(8) px(16);
  width: 100%;
  height: 40px;
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
