<script lang="ts" setup>
import { useCategoryStore } from '~/store/category'

const props = defineProps<{
  modelValue: boolean;
}>()

const emit = defineEmits<{(e: 'update:model-value', value: boolean) }>()
const categoryStore = useCategoryStore()

const formData = ref({
  title: '',
  description: '',
  images: []
})

const isModalVisible = computed({
  get () {
    return props.modelValue
  },
  set (newVal: boolean) {
    emit('update:model-value', newVal)
  }
})

function createCategory () {
  categoryStore.createCategory(formData.value).catch((e) => {
    return e
  })
}
</script>

<template>
  <UiModal v-model="isModalVisible">
    <h1>Create Category</h1>
    <form @submit.prevent="createCategory">
      <UiInput v-model="formData.title" placeholder="title" />
      <UiWysiwygEditor v-model="formData.description" />
      <UiImagePicker v-model="formData.images" />
      <UiButton> Create Category</UiButton>
    </form>
  </UiModal>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  color: #000;
}
</style>
