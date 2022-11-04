import { defineStore } from 'pinia'

export const useCategoryStore = defineStore({
  id: 'category',
  state: () => ({}),
  getters: {},
  actions: {
    createCategory () {
      return true
    }
  }
})
