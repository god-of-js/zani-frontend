import { defineStore } from 'pinia'
import Api from '~/plugin/api'
import { CollectionCreate } from '~/types'

export const useCollectionStore = defineStore({
  id: 'collection',
  state: () => ({
    collections: []
  }),

  getters: {
    collection (state) {
      return (id: string) => {
        const collections = state.collections.find(({ _id }) => _id === id)

        if (!collections) {
          throw new Error('404 Category not found')
        }

        return collections
      }
    }
  },

  actions: {
    createCollection (data: CollectionCreate) {
      return Api.createCollection(data).then((res) => {
        this.collections.push(res)
      })
    },

    getCollections () {
      return Api.getCollections().then((collections) => {
        this.collections = collections
      })
    },

    deleteCollection (id: string) {
      return Api.deleteCollection(id)
    }
  }
})
