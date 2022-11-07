<script setup lang="ts">
import { useCategoryStore } from '~/store/category'
const categoryStore = useCategoryStore()

const data = ref({
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
    <UiInput v-model="data.title" />
  </div>
</template>

<style scoped>

</style>
