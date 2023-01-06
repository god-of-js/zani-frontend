import axios from 'axios'
import { collection, addDoc } from 'firebase/firestore'
import db from './firebase'
import { CollectionCreate } from '~/types'
const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

class ApiService {
  createCollection (data: unknown) {
    return this.post('/api/v1/collections', data)
  }

  getCollections () {
    return this.get('/api/v1/collections')
  }

  private post (collectionName: string, data: Record<string, unknown>): Promise<unknown> {
    return addDoc(collection(db, collectionName), data)
  }

  private get (url: string): Promise<unknown> {
    return instance.get(url)
  }

  private patch (url: string, data: unknown): Promise<unknown> {
    return instance.get(url, data)
  }

  private remove (url: string) {
    return instance.delete(url)
  }
}

export default new ApiService()
