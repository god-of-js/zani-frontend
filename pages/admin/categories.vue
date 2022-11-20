<script lang="ts" setup>
const isCreateCategoryVisible = ref(false)
</script>

<template>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam veritatis
    assumenda sint vero similique culpa natus quia enim praesentium officiis,
    ullam, corrupti dolorem reprehenderit omnis sequi id ea doloremque. Eos.
    <UiButton @click="isCreateCategoryVisible = true" />
    <CategoryCreateCategory v-model="isCreateCategoryVisible" />
  </div>
</template>
