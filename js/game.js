/* global Phaser */

// Created by: Titus diceman
// Created on: April 2022
// This file contains the JS functions for index.html

import SplashScene from './splashScene.js'

// our game scene
const slpashScene = new SplashScene()

//* Game Scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle o the page.
    aotuCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)

// load secnes 
// NOTE: remeber any "key" is global and CAN NOT be reused
game.secne.add('slpashScene', slpashScene)

// start title
game.scene.start('slpashScene')
