<script lang="ts" setup>
import { useCollectionStore } from '~/store/collection'

const route = useRoute()
// const router = useRouter()
const collectionStore = useCollectionStore()

const isCreateProductVisible = ref(false)

const collection = computed(() => collectionStore.collection(route.params.id as string))
const products = computed(() => [])
function loadCollections () {
  collectionStore.getCollections()
}
loadCollections()

// function viewCollection (collectionId: string) {
//   router.push(`/admin/collections/${collectionId}`)
// }
</script>

<template>
  <div>
    <h2>{{ collection?.title }}</h2>
    <div class="create-btn-container">
      <UiButton fit-content @click="isCreateProductVisible = true">
        Create Product
      </UiButton>
    </div>
    <div class="grid grid-cols-5 justify-between collections">
      <ProductsProductDetailCard v-for="prod in products" :key="prod.id" :title="prod.title" :img="prod.images[0]" />
    </div>

    <UiOverlay v-model="isCreateProductVisible">
      <ProductsCreateProduct
        @created="
          () => {
            isCreateProductVisible = false;
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
