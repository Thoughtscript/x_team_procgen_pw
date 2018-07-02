/**
 * Create a Row with Columns.
 * @param typ - typ.
 * @param clazz - class.
 */

var createEl = function (typ, clazz) {
  var el = document.createElement(typ)
  el.className = clazz
  return el
}

/**
 * Create a Row with Columns.
 * @param r - specifies number of rows.
 * @param c - specifies number of cols.
 * @param root - the root element.
 */

var generate = function (r, c, root) {

  for (var i = 0; i < r; i++) {
    var row = createEl('div', 'row')
    for (var j = 0; j < c; j++) {
      var col = createEl('div', 'col')
      row.appendChild(col)
    }
    var rt = document.getElementsByClassName(root)[0]
    rt.appendChild(row)
  }
}

/**
 * Get a specific Square.
 * @param el - the root element.
 * @param r - row number.
 * @param c - col number.
 */

var get = function (el, r, c) {
  return document.getElementsByClassName(el)[0].children[r].children[c]
}
