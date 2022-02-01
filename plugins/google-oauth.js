// plugins/vue-google-oauth2.js
// file name can be changed to whatever you want
import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId:
    '22203556179-kkgklgd6rdg5trqllb49g1n2edas9rd0.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
}
Vue.use(GAuth, gauthOption)
