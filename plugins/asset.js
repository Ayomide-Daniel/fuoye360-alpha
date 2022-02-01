/* eslint-disable no-unused-expressions */
export default function (context, inject) {
  inject('asset', (path) => {
    return `https://api.fuoye360.com/${path}`
  })
}
