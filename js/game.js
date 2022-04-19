// Created by: Titus diceman
// Created on: April 2022
// This file contains the JS functions for index.html

/* global Phaser */

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
  backgroundColor: 0x5f6e7a
}

const game = new Phaser.Game(config)
console.log(game)
