<script lang="ts" setup>
const isCreateCollectionVisible = ref(false)
</script>

<template>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam veritatis
    assumenda sint vero similique culpa natus quia enim praesentium officiis,
    ullam, corrupti dolorem reprehenderit omnis sequi id ea doloremque. Eos.
    <UiButton @click="isCreateCollectionVisible = true">
      Create Collection
    </UiButton>
    <CollectionCreateCollection v-model="isCreateCollectionVisible" />
  </div>
</template>
