import Api from './Api'
import Csrf from './Csrf'
export default {
  async search(filter, query) {
    await Csrf.getCookie()
    return Api.get('/search?filter_by=' + filter + '&q=' + query)
  },
  async findUser(query) {
    await Csrf.getCookie()
    return Api.get('/search/users/' + query)
  },
}
