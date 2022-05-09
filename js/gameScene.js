/* global Phaser */

// Created By: Titus diceman
// Created on: May 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missiale', 'assets/missile.png')
  }

  create(data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()
  }

  update(time, delta) {
  // called 60 times a second, hopefully 

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyborad.addkey('SPACE')
    
      if (keyLeftObj.isDown === true) {
        this.ship.x -= 15
        if (this.ship.x < 0) {
          this.ship.x = 0
        }
      }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (kaySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.ad.spirte(this.ship.x, this.ship.y "missile")
        this
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

export default GameScene
