<script lang="ts" setup>
import { upload } from '~/plugin/cloudinary'

import { useCategoryStore } from '~/store/category'

const props = defineProps<{
  modelValue: boolean;
}>()

const emit = defineEmits<{(e: 'update:model-value', value: boolean) }>()
const categoryStore = useCategoryStore()

const formData = ref({
  title: '',
  description: '',
  images: [] as File[]
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
  alert('creates category')
  const images: string[] = []
  formData.value.images.forEach(async (item) => {
    const url = await upload(item)
    images.push(url)
  })
  console.log(images)
  categoryStore
    .createCategory({
      title: formData.value.title,
      description: formData.value.description,
      images
    })
    .catch((e) => {
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
