<script lang="ts" setup>
import { useCollectionStore } from '~/store/collection'

const router = useRouter()
const collectionStore = useCollectionStore()

const isCreateCollectionVisible = ref(false)

const collections = computed(() => collectionStore.collections)

function loadCollections () {
  collectionStore.getCollections()
}
loadCollections()

function viewCollection (collectionId: string) {
  router.push(`/admin/collections/${collectionId}`)
}
</script>

<template>
  <div>
    <h2>Collections</h2>
    <div class="create-btn-container">
      <UiButton fit-content @click="isCreateCollectionVisible = true">
        Create Collection
      </UiButton>
    </div>
    <div class="grid grid-cols-5 justify-between collections">
      <ProductsProductDetailCard v-for="col in collections" :key="col.id" :title="col.title" :img="col.images[0]" @view="viewCollection(col.id)" />
    </div>

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
h2 {
  text-align: center;
  padding: 16px;
}
.create-btn-container {
  display: flex;
  justify-content: flex-end;
}
.collections {
  padding: 20px 0
}
</style>
