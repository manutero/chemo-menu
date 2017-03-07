interface Menu {
  total: number
  menu: Array<MenuItem>
}

type MenuItem = { [name: string]: number }
