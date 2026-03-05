// Title: Men's Chorus Playable Postcard
// Author: Jared Melendez
// Hours Spent: 
// Citations: 
"use strict"

let config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    scene: [ Front, Back]
}
let game = new Phaser.Game(config)

const correctCombo = [1]
let currentCombo = []
var index = 0
let switchScenes = false