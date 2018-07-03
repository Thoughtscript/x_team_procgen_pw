window.onload = function () {

  /**
   * Init Elements.
   */

  generate(5, 5, 'tiles')

  /**
   * Road function.
   */
  var road = function (s, r, c) {
    if (c > 0 && get('tiles', r, c - 1).style.backgroundImage === "url(\"" + mappings[1] + "\")") return mappings[1]
    if (r > 0 && get('tiles', r - 1, c).style.backgroundImage === "url(\"" + mappings[1] + "\")") return mappings[0]
    return mappings[parseInt(s.charAt((r * 5) + c))]
  }

  /**
   * Tile mapping.
   */
  var mappings = [
    '/image/grass.jpg',
    '/image/road.jpg'
  ]

  /**
   * Tiles.
   *
   * @param seed - e.g. 01010 00000 00000 00000 00000
   */
  var Tiles = function (seed) {
    for (var i = 0, j = 0; i < 5 && j < 5;) {
      get('tiles', i, j).style.backgroundImage = 'url(' + road(seed, i, j) + ')'
      j++
      if (j === 5) {
        i++
        j = 0
      }
    }
  }

  Tiles(create([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]))

}