<script lang="ts" setup>
import { upload } from '~/plugin/cloudinary'

import { useCollectionStore } from '~~/store/collection'

const emit = defineEmits<{(e: 'created'): void }>()
const collectionStore = useCollectionStore()

const formData = ref({
  title: '',
  description: '',
  images: [] as File[]
})
const loading = ref(false)
const tags = computed(() => [
  {
    label: 'Null',
    value: undefined
  },
  ...['new', 'sold out', 'pre-order'].map(val => ({
    label: val,
    value: val
  }))
])
async function createProduct () {
  loading.value = true
  // TODO: handle probable errors
  const images = await upload(formData.value.images)

  collectionStore
    .createCollection({
      title: formData.value.title,
      description: formData.value.description,
      images,
      isActive: true
    })
    .then(() => emit('created'))
    .finally(() => (loading.value = false))
}
</script>

<template>
  <UiModal>
    <h1>Create Product</h1>
    <form @submit.prevent="createProduct">
      <UiInput v-model="formData.title" placeholder="title" />
      <UiWysiwygEditor v-model="formData.description" />
      <UiSelect :options="tags" name="collection" placeholder="Select Tag" />
      <UiImagePicker v-model="formData.images" />
      <UiButton :loading="loading">
        Create Product
      </UiButton>
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
