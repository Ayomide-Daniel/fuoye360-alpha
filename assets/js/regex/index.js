/* eslint-disable no-useless-escape */
export default {
  username(text) {
    const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/
    if (
      text.substr(-1) === '_' ||
      text.substr(-1) === ' ' ||
      text.substr(1) === ' ' ||
      text.substr(0) === '_' ||
      format.test(text) ||
      text === ''
    ) {
      return true
    }
    return false
  },
  email(text) {
    const format =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (format.test(text)) {
      return true
    }
    return false
  },
  telephone(text) {
    const format = /^\d+$/
    if (format.test(text) && text.length === 11) {
      return true
    }
    return false
  },
  password(text) {
    if (text.length < 8) {
      return true
    }
    return false
  },
  passwordConfirmation(pwd, confirmPwd) {
    if (pwd === confirmPwd) {
      return true
    }
    return false
  },
  location(text) {
    const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
    if (format.test(text) || text === '') {
      return true
    }
    return false

    // const format = /[`!@#$%^&*()+_\-=\[\]{};':"\\|.<>\/?~]/
    // if (
    //   text.substr(-1) === '_' ||
    //   text.substr(-1) === ' ' ||
    //   text.substr(1) === ' ' ||
    //   text.substr(0) === '_' ||
    //   format.test(text) ||
    //   text === ' '
    // ) {
    //   return true
    // }
    // return false
  },
  name(text) {
    const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
    if (format.test(text) || text === '') {
      return true
    }
    return false
  },
}
