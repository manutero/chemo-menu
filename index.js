'use strict'

const OBJ = require('./utils')
const MENU = require('./menu')
const COMBINATIONS = require('./menus')


function main() {
  foo(MENU, 7.81)
  COMBINATIONS.print()
}


/**
 * @param {Object} menu
 * @param {number} max
 * @param {{total: number, menu: Array<Object>}} acc
 */
function foo(menu, max, acc = { total: 0, menu: [] }) {
  if (OBJ.isEmpty(menu)) {
    return COMBINATIONS.addMenu(acc)
  }

  for (let productGroup of Object.keys(menu)) {
    for (let productName of Object.keys(menu[productGroup])) {
      const accCopy = OBJ.copy(acc);
      const price = menu[productGroup][productName]
      let budget = max
      if (price < budget) {
        incAcc(accCopy, { price, productName })
        budget -= price
      }
      foo(reduceMenu(menu, productGroup), budget, accCopy)
    }
  }
}


function incAcc(acc, { price, productName }) {
  const tmp = {}
  tmp[productName] = price
  acc.menu.push(tmp)
  acc.total += price
}

function reduceMenu(menu, group) {
  const menuCopy = OBJ.copy(menu)
  delete menuCopy[group]
  return menuCopy
}

main()
