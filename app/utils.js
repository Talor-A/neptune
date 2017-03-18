/**
 * Created by ta on 1/22/17.
 */
let Utils = {
  findParam (name, url) {
    if (!url) {
      url = window.location.href
    }
    name = name.replace(/[\[\]]/g, '\\$&')
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    let results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  },

  toQS (key, value) {
    return ('?' + key + '=' + value)
  },
  // Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
  debounce (func, wait, immediate) {
    var timeout
    return function () {
      let context = this
      let args = arguments
      var later = function () {
        timeout = null
        if (!immediate) {
          func.apply(context, args)
        }
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait || 200)
      if (callNow) {
        func.apply(context, args)
      }
    }
  }
}

module.exports = Utils