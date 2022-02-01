import Api from './Api'
import Csrf from './Csrf'
export default {
  async follow(id) {
    await Csrf.getCookie()
    return Api.post(`/account/${id}/follow`)
  },
  async unfollow(id) {
    await Csrf.getCookie()
    return Api.post(`/account/${id}/unfollow`)
  },
  async infiniteLoading(api, page) {
    await Csrf.getCookie()
    return Api.get(api, {
      params: {
        page,
      },
    })
  },
  async deleteNotification(id) {
    await Csrf.getCookie()
    return Api.post(`/${id}/delete-notification`)
  },
  async updateProductViews(id) {
    await Csrf.getCookie()
    return Api.post(`/action/${id}/update-views`)
  },
  async addToWishlist(id) {
    await Csrf.getCookie()
    return Api.post(`/action/${id}/add-to-wishlist`)
  },
  async removeFromWishlist(id) {
    await Csrf.getCookie()
    return Api.post(`/action/${id}/remove-from-wishlist`)
  },
  async addToCart(productid, qty) {
    await Csrf.getCookie()
    return Api.post(`/action/${productid}/add-to-cart/${qty}`)
  },
  async sendFeedback(feedback) {
    await Csrf.getCookie()
    return Api.post(`/action/feedback`, feedback)
  },
}
