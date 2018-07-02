'use strict'

/**
 * Main view controller - for single page app.
 */

const express = require('express'),
  view = express.Router()

view
  .get('/potion', (req, res) => res.render('potion.ejs'))
  .get('/automata', (req, res) => res.render('automata.ejs'))
  .get('/tiles', (req, res) => res.render('tiles.ejs'))

console.log(`View controller initialized!`)

module.exports = view