'use strict'

const OBJ = require('./utils')


/** @type Array<Menu> */
const menus = []

module.exports = {

  print() {
    for (let menu of menus) {
      console.log(JSON.stringify(menu))
    }
  },

  /**
   * @param {Menu} menu
   */
  addMenu(menu) {
    if (isANewCombination(menu)) {
      menus.push(menu)
    }
  }

}


/**
 * @param {Menu} obj
 */
function isANewCombination(obj) {
  for (const menu of menus) {
    if (menuAlreadyRegistered(obj, menu)) {
      return false
    }
  }
  return true
}

function menuAlreadyRegistered(menu1, menu2) {
  if (menu1.total !== menu2.total) {
    return false
  }
  for (let menuItem of menu1.menu) {
    if (menu2.menu.find((item) => OBJ.isEq(menuItem, item))) {
      return true
    }
  }
  return false
}
