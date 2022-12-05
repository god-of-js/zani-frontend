<script lang="ts" setup>
import { useCollectionStore } from '~/store/collection'

const collectionStore = useCollectionStore()

const isCreateCollectionVisible = ref(false)
const collections = computed(() => collectionStore.collections)

collectionStore.getCollections()

function deleteCollection (id: string) {
  collectionStore.deleteCollection(id)
}
</script>

<template>
  <div>
    <UiButton
      class="create-collection"
      @click="isCreateCollectionVisible = true"
    >
      Create Collection
    </UiButton>
    <div class="collections">
      <UiDetailCard
        v-for="(collection, index) in collections"
        :id="collection._id"
        :key="index"
        :image="collection.image"
        :title="collection.title"
        @delete="deleteCollection"
      />
    </div>

    <UiOverlay v-model="isCreateCollectionVisible">
      <CollectionCreateCollection @close="isCreateCollectionVisible = false" />
    </UiOverlay>
  </div>
</template>

<style lang="scss" scoped>
.create-collection {
  width: fit-content;
  float: right;
}

.collections {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 8px;
}
</style>
