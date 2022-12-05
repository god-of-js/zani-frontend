<script lang="ts" setup>
import { useCollectionStore } from '~/store/collection'

const collectionStore = useCollectionStore()

const isCreateCollectionVisible = ref(false)

collectionStore.getCollections()
</script>

<template>
  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam veritatis
    assumenda sint vero similique culpa natus quia enim praesentium officiis,
    ullam, corrupti dolorem reprehenderit omnis sequi id ea doloremque. Eos.
    <UiButton @click="isCreateCollectionVisible = true">
      Create Collection
    </UiButton>
    <UiOverlay v-model="isCreateCollectionVisible">
      <CollectionCreateCollection />
    </UiOverlay>
  </div>
</template>
