import axios from 'axios'

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

  private post (url: string, data: unknown): Promise<unknown> {
    return instance.post(url, data)
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
