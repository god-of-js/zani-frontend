<script lang="ts" setup>
import { upload } from '~/plugin/cloudinary'

import { useCollectionStore } from '~~/store/collection'

const collectionStore = useCollectionStore()

const formData = ref({
  title: '',
  description: '',
  images: [] as File[]
})

async function createCollection () {
  const images = await upload(formData.value.images)

  collectionStore
    .createCollection({
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
  <UiModal>
    <h1>Create Collection</h1>
    <form @submit.prevent="createCollection">
      <UiInput v-model="formData.title" placeholder="title" />
      <UiWysiwygEditor v-model="formData.description" />
      <UiImagePicker v-model="formData.images" />
      <UiButton> Create Collection</UiButton>
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
