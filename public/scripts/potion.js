window.onload = function () {

  /**
   * Init Elements.
   */
  generate(10, 10, 'potion')

  /**
   * Potion Mapping.
   */
  var mappings = [
    '#9C27B0',
    '#673AB7',
    '#2196F3',
    '#FF9800',
    '#D32F2F'
  ]

  /**
   * Potion.
   * @param - seed - e.g. 12, 11, 44
   */
  var Potion = function (seed) {
    var color_top = parseInt(seed.charAt(0))
    var color_bottom = parseInt(seed.charAt(1))

    get('potion', 1, 4).style.backgroundColor = 'black'
    get('potion', 1, 5).style.backgroundColor = 'black'
    get('potion', 2, 3).style.backgroundColor = 'black'
    get('potion', 2, 4).style.backgroundColor = mappings[color_top]
    get('potion', 2, 5).style.backgroundColor = mappings[color_top]
    get('potion', 2, 6).style.backgroundColor = 'black'
    get('potion', 3, 4).style.backgroundColor = 'black'
    get('potion', 3, 5).style.backgroundColor = 'black'
    get('potion', 4, 3).style.backgroundColor = 'black'
    get('potion', 4, 4).style.backgroundColor = mappings[color_bottom]
    get('potion', 4, 5).style.backgroundColor = mappings[color_bottom]
    get('potion', 4, 6).style.backgroundColor = 'black'
    get('potion', 5, 2).style.backgroundColor = 'black'
    get('potion', 5, 3).style.backgroundColor = mappings[color_bottom]
    get('potion', 5, 4).style.backgroundColor = "white"
    get('potion', 5, 5).style.backgroundColor = mappings[color_bottom]
    get('potion', 5, 6).style.backgroundColor = mappings[color_bottom]
    get('potion', 5, 7).style.backgroundColor = 'black'
    get('potion', 6, 2).style.backgroundColor = 'black'
    get('potion', 6, 3).style.backgroundColor = mappings[color_bottom]
    get('potion', 6, 4).style.backgroundColor = "white"
    get('potion', 6, 5).style.backgroundColor = mappings[color_bottom]
    get('potion', 6, 6).style.backgroundColor = mappings[color_bottom]
    get('potion', 6, 7).style.backgroundColor = 'black'
    get('potion', 7, 2).style.backgroundColor = 'black'
    get('potion', 7, 3).style.backgroundColor = mappings[color_bottom]
    get('potion', 7, 4).style.backgroundColor = mappings[color_bottom]
    get('potion', 7, 5).style.backgroundColor = mappings[color_bottom]
    get('potion', 7, 6).style.backgroundColor = "white"
    get('potion', 7, 7).style.backgroundColor = 'black'
    get('potion', 8, 3).style.backgroundColor = 'black'
    get('potion', 8, 4).style.backgroundColor = 'black'
    get('potion', 8, 5).style.backgroundColor = 'black'
    get('potion', 8, 6).style.backgroundColor = 'black'
  }

  Potion(create([4,4]));

}