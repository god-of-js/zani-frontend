import axios from 'axios'
import { collection, addDoc, getDocs } from 'firebase/firestore'

import db from './firebase'

import { CollectionCreate } from '~/types'

const instance = axios.create({
  baseURL: 'http://localhost:5000'
})

class ApiService {
  createCollection (data: CollectionCreate) {
    return this.create('collections', data)
  }

  getCollections () {
    return this.getCollection('collections')
  }

  private create (collectionName: string, data: unknown): Promise<unknown> {
    return addDoc(collection(db, collectionName), data)
  }

  private async getCollection (collectionName: string): Promise<unknown> {
    const rawObjects = await getDocs(collection(db, collectionName))
    return rawObjects.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  }

  private patch (url: string, data: unknown): Promise<unknown> {
    return instance.get(url, data)
  }

  private remove (url: string) {
    return instance.delete(url)
  }
}

export default new ApiService()
