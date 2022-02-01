import Api from './Api'
import Csrf from './Csrf'
export default {
  async getNotification() {
    await Csrf.getCookie()
    return Api.get()
  },
}
