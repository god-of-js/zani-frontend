import { defineStore } from 'pinia'
import Api from '~/plugin/api'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({}),
  getters: {},
  actions: {
    createCategory () {
      return Api.createCategory({})
    }
  }
})
