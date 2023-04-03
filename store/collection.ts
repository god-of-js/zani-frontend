import { defineStore } from 'pinia'
import Api from '~/plugin/api'
import { CollectionCreate, Collection } from '~/types'

interface State {
  collections: Collection[]
}
export const useCollectionStore = defineStore({
  id: 'collection',
  state: (): State => ({
    collections: []
  }),

  getters: {
    collection: (state: State) => {
      return (collectionId: string) => state.collections.find(({ id }) => id === collectionId)
    }
  },

  actions: {
    createCollection (data: CollectionCreate) {
      return Api.createCollection(data)
    },

    async getCollections () {
      this.collections = await Api.getCollections()
    }
  }
})
