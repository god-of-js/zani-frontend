<script setup lang="ts">
import { TipCommand } from './UiWysiwygEditor.vue'
import IconBold from '~/assets/icons/editor/IconBold.vue'
import IconItalic from '~/assets/icons/editor/IconItalic.vue'
import IconParagraph from '~/assets/icons/editor/IconParagraph.vue'
import IconUl from '~/assets/icons/editor/IconUl.vue'
import IconOl from '~/assets/icons/editor/IconOl.vue'
import IconUndo from '~/assets/icons/editor/IconUndo.vue'

interface Props {
  isBoldActive?: boolean;
  isItalicActive?: boolean;
  isParagraphActive?: boolean;
  isLevelOneHeadingActive?: boolean;
  isLevelTwoHeadingActive?: boolean;
  isLevelThreeHeadingActive?: boolean;
  isBulletListActive?: boolean;
  isOrderedListActive?: boolean;
}

const props = defineProps<Props>()
const emit = defineEmits<{(e: 'toggle', param: TipCommand): string;}>()

const toggle = (param: TipCommand) => {
  emit('toggle', param)
}
</script>

<template>
  <span class="buttons-container">
    <button
      type="button"
      :class="{ 'is-active': props.isBoldActive }"
      class="icon-button"
      @click.prevent="toggle('toggleBold')"
    >
      <IconBold />
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isItalicActive }"
      @click.prevent="toggle('toggleItalic')"
    >
      <IconItalic />
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isParagraphActive }"
      @click.prevent="toggle('setParagraph')"
    >
      <IconParagraph />
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isLevelOneHeadingActive }"
      @click.prevent="toggle('toggleLevelOneHeading')"
    >
      <span>H1</span>
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isLevelTwoHeadingActive }"
      @click.prevent="toggle('toggleLevelTwoHeading')"
    >
      H2
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isLevelThreeHeadingActive }"
      @click.prevent="toggle('toggleLevelThreeHeading')"
    >
      H3
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isBulletListActive }"
      @click.prevent="toggle('toggleBulletList')"
    >
      <IconUl />
    </button>

    <button
      type="button"
      class="icon-button"
      :class="{ 'is-active': props.isOrderedListActive }"
      @click.prevent="toggle('toggleOrderedList')"
    >
      <IconOl />
    </button>

    <button type="button" class="icon-button" @click.prevent="toggle('undo')">
      <IconUndo />
    </button>
  </span>
</template>

<style lang="scss" scoped>
button {
  background: white;
  border: 1px solid var(--color-gray-300);
  cursor: pointer;

  &:not(:first-child) {
    border-left: transparent;
  }
}
button svg {
  width: 16px;
}
button span {
  font-size: 110%;
}
button.is-active span {
  font-weight: bold;
  font-size: 120%;
  color: var(--color-primary);
}

button.icon-button {
  padding: 0.5rem;
  font-size: 18px;

  &:hover {
    background-color: #f9fafb;
  }

  &:first-of-type {
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }
  &:last-of-type {
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
}
button.is-active svg {
  width: 18px;
  fill: var(--color-primary);
}

.buttons-container {
  position: relative;
  z-index: 0;
  display: flex;
  margin-bottom: 1rem;
  border-radius: 0.375rem;
}
</style>
