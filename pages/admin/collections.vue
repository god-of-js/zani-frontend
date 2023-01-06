<script lang="ts" setup>
import { useCollectionStore } from '~/store/collection'

const collectionStore = useCollectionStore()

const isCreateCollectionVisible = ref(false)

function loadCollections () {
  collectionStore.getCollections()
}
loadCollections()
</script>

<template>
  <div>
    <UiButton
      class="create-btn"
      fit-content
      @click="isCreateCollectionVisible = true"
    >
      Create Collection
    </UiButton>

    <UiOverlay v-model="isCreateCollectionVisible">
      <CollectionCreateCollection
        @created="
          () => {
            isCreateCollectionVisible = false;
            loadCollections();
          }
        "
      />
    </UiOverlay>
  </div>
</template>

<style lang="scss" scoped>
.create-btn {
  float: right;
}
</style>
