import Api from './Api'
import Csrf from './Csrf'

export default {
  async getBroadcasts() {
    await Csrf.getCookie
    return Api.get('/broadcast')
  },
  async viewThread(id) {
    await Csrf.getCookie()
    return Api.get('/broadcast/thread/' + id)
  },
  async bookmarks() {
    await Csrf.getCookie()
    return Api.get('/broadcast/bookmark')
  },
  async likeBroadcast(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/like')
  },
  async unlikeBroadcast(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/unlike')
  },
  async rebroadcast(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/rebroadcast')
  },
  async undoRebroadcast(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/undorebroadcast')
  },
  async addToBookmarks(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/add-bookmark')
  },
  async removeFromBookmarks(id) {
    await Csrf.getCookie()
    return Api.post('/broadcast/' + id + '/remove-bookmark')
  },
  async createBroadcast(fd) {
    await Csrf.getCookie()
    return Api.post('/broadcast', fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  async createComment(fd) {
    await Csrf.getCookie()
    return Api.post('/broadcast/comment', fd)
  },
}
