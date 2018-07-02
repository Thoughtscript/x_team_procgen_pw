window.onload = function () {

  /**
   * Init Elements.
   */

  generate(5, 5, 'tiles');

  /**
   * Automata Mapping.
   */
  var mappings = [
    '/image/grass.jpg',
    '/image/road.jpg'
  ]

  /**
   * Tiles.
   *
   * @param - seed - e.g. 01010 00000 00000 00000 00000
   */
  var Tiles = function (seed) {
    get('tiles', 0, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(0))] + ")"
    get('tiles', 0, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(1))] + ")"
    get('tiles', 0, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(2))] + ")"
    get('tiles', 0, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(3))] + ")"
    get('tiles', 0, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(4))] + ")"
    get('tiles', 1, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(5))] + ")"
    get('tiles', 1, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(6))] + ")"
    get('tiles', 1, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(7))] + ")"
    get('tiles', 1, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(8))] + ")"
    get('tiles', 1, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(9))] + ")"
    get('tiles', 2, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(10))] + ")"
    get('tiles', 2, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(11))] + ")"
    get('tiles', 2, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(12))] + ")"
    get('tiles', 2, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(13))] + ")"
    get('tiles', 2, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(14))] + ")"
    get('tiles', 3, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(15))] + ")"
    get('tiles', 3, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(16))] + ")"
    get('tiles', 3, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(17))] + ")"
    get('tiles', 3, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(18))] + ")"
    get('tiles', 3, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(19))] + ")"
    get('tiles', 4, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(20))] + ")"
    get('tiles', 4, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(21))] + ")"
    get('tiles', 4, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(22))] + ")"
    get('tiles', 4, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(23))] + ")"
    get('tiles', 4, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(24))] + ")"
  }

  Tiles(create([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]));

}