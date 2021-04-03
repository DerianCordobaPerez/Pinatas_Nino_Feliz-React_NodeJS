import axios from "axios"

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:10000/"
    })
  }

  async apiCall(request) {
    try {
      return (await request()).data
    } catch (e) {
      console.log(e)
      return e.response.data
    }
  }

  async getAllContent() {
    return await this.apiCall(() => this.api.get(`api/pinatas`))
  }

  async getContent(destination) {
    return await this.apiCall(() => this.api.get(`api/pinatas/${destination}`))
  }
}

const api = new Api()
export default api
