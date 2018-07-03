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
    var active = get('automata', r, c).style.backgroundImage, flag = false

    var innerHelper = function (rw, cl) {
      if (active === grass) {
        if (flag) {
          var current = get('automata', r, c).style.backgroundImage
          if (current !== snake) {
            get('automata', r, c).style.backgroundImage = cat
            console.log('Cat made Cat from: Row-' + rw + ' Col-' + cl + ' at: Row-' + r + ' Col-' + c)
            flag = false
          }
        } else if (get('automata', rw, cl).style.backgroundImage === cat) flag = true
      }
    }

    if (r > 0 && c > 0 && r < 4 && c < 4) {
      innerHelper(r - 1, c - 1)
      innerHelper(r - 1, c)
      innerHelper(r - 1, c + 1)
      innerHelper(r, c - 1)
      innerHelper(r, c + 1)
      innerHelper(r + 1, c - 1)
      innerHelper(r + 1, c)
      innerHelper(r + 1, c + 1)
    }
  }

  /**
   * Snake logic helper.
   */

  var snakeHelper = function (r, c) {
    var active = get('automata', r, c).style.backgroundImage

    var innerHelper = function (rw, cl) {
      if (active === snake) {
        var adj = get('automata', rw, cl).style.backgroundImage
        get('automata', rw, cl).style.backgroundImage = (adj === cat) ? grass : adj
        if (adj === cat) console.log('Snake ate Cat at: Row-' + rw + ' Col-' + cl + ' from: Row-' + r + ' Col-' + c)
      }
    }

    if (r > 0 && c > 0 && r < 4 && c < 4) {
      innerHelper(r - 1, c - 1)
      innerHelper(r - 1, c)
      innerHelper(r - 1, c + 1)
      innerHelper(r, c - 1)
      innerHelper(r, c + 1)
      innerHelper(r + 1, c - 1)
      innerHelper(r + 1, c)
      innerHelper(r + 1, c + 1)
    }

    //Move Snake
    if (active === snake) {
      get('automata', r, c).style.backgroundImage = grass
      var randomR = Math.floor(Math.random() * 4), randomC = Math.floor(Math.random() * 4)
      var newSnake = get('automata', randomR, randomC).style.backgroundImage
      if (newSnake !== snake) get('automata', randomR, randomC).style.backgroundImage = snake
      console.log('Snake moved at: Row-' + randomR + ' Col-' + randomC + ' from: Row-' + r + ' Col-' + c)
    }
  }

  /**
   * Game loop.
   */

  var gameLoop = function (currentCycle, cycles) {
    console.log("Cycle: " + currentCycle)
    setTimeout(function () {

      setTimeout(function () {
        for (var i = 0, j = 0; i < 5 && j < 5; i) {
          snakeHelper(i, j)
          j++
          if (j === 5) {
            i++
            j = 0
          }
        }
      }, 2000)

      setTimeout(function () {
        for (var a = 0, b = 0; a < 5 && b < 5; a) {
          catHelper(a, b)
          b++
          if (b === 5) {
            a++
            b = 0
          }
        }
      }, 2000)

      currentCycle++
      if (currentCycle < cycles) gameLoop(currentCycle, cycles)

    }, 2000)

  }

  setTimeout(function () {
    gameLoop(0, 20)
  }, 1000)
}