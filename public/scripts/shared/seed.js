/**
 * Generate Seed.
 *
 * @param - arr - [4, 2, 3] - generates a seed of length 3 such
 * that each char is bounded by the corresponding arr index.
 */

var create = function (arr) {
  var seed = ""
  for (var i = 0; i < arr.length; i++) {
    seed += Math.floor(Math.random() * arr[i]);
  }
  return seed;
}
