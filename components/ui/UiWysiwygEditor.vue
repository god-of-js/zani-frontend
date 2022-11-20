<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
// eslint-disable-next-line import/no-named-as-default
import StarterKit from '@tiptap/starter-kit'
import AppWysiwygEditorToolbar from './UiWysiwygToolbar.vue'

export type TipCommand =
  | 'toggleBold'
  | 'toggleItalic'
  | 'setParagraph'
  | 'toggleLevelOneHeading'
  | 'toggleLevelTwoHeading'
  | 'toggleLevelThreeHeading'
  | 'toggleBulletList'
  | 'toggleOrderedList'
  | 'undo';

interface Props {
  modelValue: string | null | undefined;
  toolBarPosition?: 'bottom' | 'top';
  label?: string;
  errors?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  toolBarPosition: 'top',
  label: '',
  errors: () => [],
  modelValue: null
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void }>()

const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit],
  editable: true,
  injectCSS: false,
  onUpdate ({ editor, transaction }) {
    if (!transaction.docChanged) {
      return
    }

    emit('update:modelValue', editor.getHTML())
  }
})

const toolbarBindings = computed(() => ({
  isBoldActive: editor.value?.isActive('bold'),
  isItalicActive: editor.value?.isActive('italic'),
  isParagraphActive: editor.value?.isActive('paragraph'),
  isLevelOneHeadingActive: editor.value?.isActive('heading', { level: 1 }),
  isLevelTwoHeadingActive: editor.value?.isActive('heading', { level: 2 }),
  isLevelThreeHeadingActive: editor.value?.isActive('heading', { level: 3 }),
  isBulletListActive: editor.value?.isActive('bulletList'),
  isOrderedListActive: editor.value?.isActive('orderedList')
}))

const toggle = (param: TipCommand) => {
  switch (param) {
    case 'toggleBold':
      editor.value?.chain().focus().toggleBold().run()
      break
    case 'toggleItalic':
      editor.value?.chain().focus().toggleItalic().run()
      break
    case 'setParagraph':
      editor.value?.chain().focus().setParagraph().run()
      break
    case 'toggleLevelOneHeading':
      editor.value?.chain().focus().toggleHeading({ level: 1 }).run()
      break
    case 'toggleLevelTwoHeading':
      editor.value?.chain().focus().toggleHeading({ level: 2 }).run()
      break
    case 'toggleLevelThreeHeading':
      editor.value?.chain().focus().toggleHeading({ level: 3 }).run()
      break
    case 'toggleBulletList':
      editor.value?.chain().focus().toggleBulletList().run()
      break
    case 'toggleOrderedList':
      editor.value?.chain().focus().toggleOrderedList().run()
      break
    case 'undo':
      editor.value?.chain().undo().focus().run()
      break
  }
}

const setFocus = () => editor.value?.view.focus()

watch(
  () => props.modelValue,
  () => {
    if (!editor.value?.isFocused) {
      editor.value?.commands.setContent(props.modelValue)
    }
  }
)
</script>

<template>
  <div v-if="editor" class="wysiwyg">
    <UiField :label="label" :errors="errors">
      <div class="editor-container" @click="setFocus">
        <AppWysiwygEditorToolbar v-bind="toolbarBindings" @toggle="toggle" />
        <editor-content :editor="editor" />
      </div>
    </UiField>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/colors.scss';
.editor-container {
  @apply prose;
  padding: 0.5rem;
  border: 1px solid $primary-100;
  margin-bottom: 12px;
  max-width: 100%;
  min-height: 7em;
  max-height: 17em;
  overflow-y: auto;
}
.bottom-toolbar {
  display: flex;
  justify-content: flex-start;
}

.editor-container :where(p) {
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}
</style>

<style type="scss">
.ProseMirror {
  outline: none;
}

.ProseMirror h1 {
  font-size: 1.2rem;
  font-weight: bold;
}
.ProseMirror h2 {
  font-size: 1rem;
  font-weight: bold;
}
.ProseMirror h3 {
  font-weight: bold;
}

.bottom-toolbar .icon-button {
  margin-top: -12px;
  border: none;
}
</style>
