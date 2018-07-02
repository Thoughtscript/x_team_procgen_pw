window.onload = function () {

  /**
   * Init Elements.
   */

  generate(5, 5, 'automata');

  /**
   * Automata Mapping.
   */
  var mappings = [
    '/image/grass.jpg',
    '/image/grass.jpg',
    '/image/grass.jpg',
    '/image/Cat.png',
    '/image/Cat.png',
    '/image/Snake.png',
    '/image/Cat.png',
    '/image/grass.jpg'
  ]

  /**
   * Automata.
   *
   * @param - seed - e.g. 1102100101000001000000201
   */
  var Automata = function (seed) {
    get('automata', 0, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(0))] + ")"
    get('automata', 0, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(1))] + ")"
    get('automata', 0, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(2))] + ")"
    get('automata', 0, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(3))] + ")"
    get('automata', 0, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(4))] + ")"
    get('automata', 1, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(5))] + ")"
    get('automata', 1, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(6))] + ")"
    get('automata', 1, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(7))] + ")"
    get('automata', 1, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(8))] + ")"
    get('automata', 1, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(9))] + ")"
    get('automata', 2, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(10))] + ")"
    get('automata', 2, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(11))] + ")"
    get('automata', 2, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(12))] + ")"
    get('automata', 2, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(13))] + ")"
    get('automata', 2, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(14))] + ")"
    get('automata', 3, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(15))] + ")"
    get('automata', 3, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(16))] + ")"
    get('automata', 3, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(17))] + ")"
    get('automata', 3, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(18))] + ")"
    get('automata', 3, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(19))] + ")"
    get('automata', 4, 0).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(20))] + ")"
    get('automata', 4, 1).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(21))] + ")"
    get('automata', 4, 2).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(22))] + ")"
    get('automata', 4, 3).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(23))] + ")"
    get('automata', 4, 4).style.backgroundImage = "url(" + mappings[parseInt(seed.charAt(24))] + ")"
  }

  Automata(create([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]));

}