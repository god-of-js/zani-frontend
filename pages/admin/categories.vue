<script setup lang="ts">
import { useCategoryStore } from '~/store/category'
const categoryStore = useCategoryStore()

const formData = ref({
  title: '',
  description: '',
  image: ''
})
function createCategory () {
  categoryStore.createCategory().catch((e) => {
    return e
  })
}

createCategory()
</script>

<template>
  <div>
    <h1>Create Category</h1>
    <UiInput v-model="formData.title" />
    <UiButton> Lorem Ipsum </UiButton>
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  color: #000;
}
</style>
