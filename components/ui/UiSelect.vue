<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

export interface SelectOption {
  label: string;
  value?: string | number | undefined;
  subtitle?: string;
}

interface Props {
  modelValue?: string | number | undefined | null;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  required?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  required: false,
  disableSearch: false,
  disabled: false,
  placeholder: 'Please select'
})

const emit = defineEmits<{(e: 'update:modelValue', p?: string | null): void}>()

const picked = computed({
  get: () => props.modelValue,
  set: (value?: string | null) => {
    if (props.modelValue === value) {
      return
    }

    emit('update:modelValue', value)
  }
})

const textSearch = ref('')
const uiSelect = ref<HTMLElement>()
const isVisibleOptions = ref(false)
const selection = computed(() => {
  return props.options.find(option => option.value === picked.value)
})

watch(picked, hideOptions)
onClickOutside(uiSelect, () => {
  hideOptions()
  textSearch.value = ''
})

function hideOptions () {
  isVisibleOptions.value = false
}

function focusSearch () {
  const inputSearchEl = uiSelect.value?.getElementsByClassName(
    'input-search'
  )[0] as HTMLInputElement
  inputSearchEl && inputSearchEl.focus()
}

function toggleOptionsVisibility () {
  if (props.disabled) {
    return
  }

  isVisibleOptions.value = !isVisibleOptions.value
  if (isVisibleOptions.value) {
    nextTick(focusSearch)
  }
}
</script>

<template>
  <div ref="uiSelect" class="ui-select">
    <label
      :class="{
        'is-disabled': props.disabled,
      }"
      :for="name"
      class="selection"
    >
      <div class="select-label" @click="toggleOptionsVisibility">
        <UiSelectOption
          v-if="selection && !isVisibleOptions"
          :label="selection.label"
          :value="selection.value"
          :subtitle="selection.subtitle"
        />

        <span v-else name="placeholder"> {{ props.placeholder }}</span>
      </div>

      <div class="icon-holder" @click="toggleOptionsVisibility">
        <UiIconChevronDown class="icon-size-sm" />
      </div>
    </label>

    <transition>
      <div
        v-if="isVisibleOptions"
        class="options"
        :class="{ 'bordered-options': props.disableSearch }"
      >
        <slot name="optionsHeader" />
        <label
          v-for="option in props.options"
          :key="option.value"
          :class="{
            selected: option.value === picked,
          }"
          class="select-option"
          @click="picked = option.value ?? null"
        >
          <UiSelectOption v-bind="option" />
        </label>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';

.ui-select {
  position: relative;

  min-height: 3rem;
  margin-bottom: 12px;
}

.selection {
  display: flex;
  align-items: center;
  border: 1px solid $primary-100;
  background: #ffffff;
  min-height: 45px;
}

.select-label {
  padding: 10px 14px;
  width: calc(100% - 36px);
}

.options {
  position: absolute;
  z-index: 999;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(100, 100, 100, 0.1);
  border: 1px transparent solid;
  overflow-y: scroll;
  max-height: 220px;
}

.select-option {
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  background: #fff;
  width: 97%;
}

.select-option:hover {
  background: #eee;
}

.select-option.selected {
  background: #effbfa;
}
.bordered-options {
  border: 1px solid #d0d5dd;
  border-top: transparent;
  box-shadow: 0px;
}
.icon-holder {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  background: #ffffff;
  margin-right: 4px;
  max-width: 40px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
  margin-top: 0;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  margin-top: -1rem;
}

.select-label {
  cursor: pointer;
}

.is-disabled {
  opacity: 0.5;
  .select-label {
    cursor: not-allowed;
  }
}
</style>
