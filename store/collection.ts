import { defineStore } from 'pinia'
import Api from '~/plugin/api'
import { CollectionCreate } from '~/types'

export const useCollectionStore = defineStore({
  id: 'collection',
  state: () => ({
    categories: []
  }),
  getters: {},
  actions: {
    createCollection (data: CollectionCreate) {
      return Api.createCollection(data)
    },

    getCollections () {
      return Api.getCollections()
    }
  }
})
