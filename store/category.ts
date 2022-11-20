import { defineStore } from 'pinia'
import Api from '~/plugin/api'
import { CategoryCreate } from '~/types'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({}),
  getters: {},
  actions: {
    createCategory (data: CategoryCreate) {
      return Api.createCategory(data)
    }
  }
})
