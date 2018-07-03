window.onload = function () {

  /**
   * Init Elements.
   */

  generate(5, 5, 'automata')

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
   * @param seed - e.g. 1102100101000001000000201
   */
  var Automata = function (seed) {
    for (var i = 0, j = 0; i < 5 && j < 5;) {
      get('automata', i, j).style.backgroundImage = 'url(' + mappings[parseInt(seed.charAt((i * 5 + j)))] + ')'
      j++
      if (j === 5) {
        i++
        j = 0
      }
    }
  }

  Automata(create([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]))

  var cat = 'url("' + mappings[3] + '")',
    snake = 'url("' + mappings[5] + '")',
    grass = 'url("' + mappings[0] + '")'

  /**
   * Cat logic helper.
   */

  var catHelper = function (r, c) {
    var current = get('automata', r, c).style.backgroundImage

    var innerHelper = function (rw, cl) {
      if (current === grass) {
        var cr = get('automata', rw, cl).style.backgroundImage
        get('automata', r, c).style.backgroundImage = (cr === cat) ? cat : current
        console.log('Cat made Cat from: Row-' + rw + ' Col-' + cl + ' at: Row-' + r + ' Col-' + c)
      }
    }

    if (r > 0 && c > 0 && c < 4) {
      innerHelper(r - 1, c - 1)
      innerHelper(r - 1, c)
      innerHelper(r - 1, c + 1)
    }
    if (c > 0 && c < 4) {
      innerHelper(r, c - 1)
      innerHelper(r, c + 1)
    }
    if (r > 0 && c > 0 && r < 4 && c < 4) {
      innerHelper(r + 1, c - 1)
      innerHelper(r + 1, c)
      innerHelper(r + 1, c + 1)
    }
  }

  /**
   * Snake logic helper.
   */

  var snakeHelper = function (r, c) {
    var current = get('automata', r, c).style.backgroundImage

    var innerHelper = function (rw, cl) {
      if (current === snake) {
        var cr = get('automata', rw, cl).style.backgroundImage
        get('automata', rw, cl).style.backgroundImage = (cr === cat) ? grass : cr
        console.log('Snake ate Cat at: Row-' + rw + ' Col-' + cl + ' from: Row-' + r + ' Col-' + c)
      }
    }

    if (r > 0 && c > 0 && c < 4) {
      innerHelper(r - 1, c - 1)
      innerHelper(r - 1, c)
      innerHelper(r - 1, c + 1)
    }
    if (c > 0 && c < 4) {
      innerHelper(r, c - 1)
      innerHelper(r, c + 1)
    }
    if (r > 0 && c > 0 && r < 4 && c < 4) {
      innerHelper(r + 1, c - 1)
      innerHelper(r + 1, c)
      innerHelper(r + 1, c + 1)
    }
  }

  /**
   * Game loop.
   */

  var gameLoop = function (cycles) {
    var current = 0
    do {

      for (var i = 0, j = 0; i < 5 && j < 5;) {
        snakeHelper(i, j)
        j++
        if (j === 5) {
          i++
          j = 0
        }
      }

      for (var a = 0, b = 0; a < 5 && b < 5;) {
        catHelper(a, b)
        b++
        if (b === 5) {
          a++
          b = 0
        }
      }

      current++
    } while (current < cycles)
  }

  setTimeout(function () {
    gameLoop(1000)
  }, 4000)
}