<script lang="ts" setup>
import { upload } from '~/plugin/cloudinary'

import { useCollectionStore } from '~~/store/collection'

const emit = defineEmits<{(e: 'close'): void }>()
const collectionStore = useCollectionStore()

const formData = ref(getFormData())
function getFormData () {
  return {
    title: '',
    description: '',
    images: [] as File[]
  }
}

onMounted(() => {
  formData.value = getFormData()
})

async function createCollection () {
  const isDuplicate = collectionStore.collections.find(
    ({ title }) => title === formData.value.title
  )

  if (isDuplicate) {
    alert('Collection name already exists')
    return
  }

  const images = await upload(formData.value.images)

  collectionStore
    .createCollection({
      title: formData.value.title,
      description: formData.value.description,
      image: images[0]
    })
    .then(() => {
      emit('close')
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
      <UiImagePicker v-model="formData.images" :max="1" />
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
