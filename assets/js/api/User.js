import Api from './Api'
import Csrf from './Csrf'
export default {
  async register(form) {
    await Csrf.getCookie()
    return Api.post('/register', form)
  },
  async login(form) {
    await Csrf.getCookie(true)
    return Api.post('/login', form)
  },
  async logout() {
    await Csrf.getCookie()
    return Api.post('/logout')
  },
  async current() {
    await Csrf.getCookie()
    return Api.get('/user')
  },
  async auth() {
    await Csrf.getCookie()
    return Api.get('/authenticated')
  },
  async updateProfile(formData) {
    await Csrf.getCookie()
    return Api.post('/account/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  sendPasswordResetLink(form) {
    return Api.post('/password/email', form)
  },
  resetPassword(form) {
    return Api.post('/password/reset', form)
  },
  async getThisUser(name) {
    await Csrf.getCookie()
    return Api.get(`/account/${name}`)
  },
  async getFollowers(id) {
    await Csrf.getCookie()
    return Api.get(`/account/${id}/follower`)
  },
  async getFollowing(id) {
    await Csrf.getCookie()
    return Api.get(`/account/${id}/following`)
  },
}
