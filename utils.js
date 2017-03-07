'use strict'

module.exports = {

  copy(obj) {
    return JSON.parse(JSON.stringify(obj))
  },

  isEmpty(obj) {
    return Object.keys(obj).length == 0
  },

  isEq(obj1, obj2) {
    for (let key of Object.keys(obj1)) {
      if (!obj2[key] || obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }

}
