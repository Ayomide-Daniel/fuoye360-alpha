import Api from './Api'
import Csrf from './Csrf'

export default {
  async getTrending() {
    await Csrf.getCookie
    return Api.get('/shop/trending')
  },
  async getProducts(id) {
    await Csrf.getCookie
    return Api.get('/shop/' + id)
  },
  async sell(fd) {
    await Csrf.getCookie()
    return Api.post('/shop', fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  async wishlist() {
    await Csrf.getCookie()
    return Api.get('/shop/wishlist')
  },
  async getIndex() {
    await Csrf.getCookie
    return Api.get('/shop')
  },
}
