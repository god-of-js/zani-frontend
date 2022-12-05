import axios from 'axios'

import { CollectionCreate } from '~/types'

const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

class ApiService {
  createCollection (data: CollectionCreate) {
    return this.post('/api/v1/collections', data)
  }

  getCollections () {
    return this.get('/api/v1/collections')
  }

  updateCollection (data: CollectionCreate) {
    return this.patch('/api/v1/collections', data)
  }

  deleteCollection (collectionId: string) {
    return this.remove(`/api/v1/collections/${collectionId}`)
  }

  private post (url: string, data: unknown): Promise<unknown> {
    return instance.post(url, data).then(({ data }) => data.data)
  }

  private get (url: string): Promise<unknown> {
    return instance.get(url).then(({ data }) => data.data)
  }

  private patch (url: string, data: unknown): Promise<unknown> {
    return instance.patch(url, data).then(({ data }) => data.data)
  }

  private remove (url: string) {
    return instance.delete(url)
  }
}

export default new ApiService()
