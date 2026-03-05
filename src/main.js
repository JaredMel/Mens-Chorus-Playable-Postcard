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

const correctCombo = [11, 3, 9, 3, 9, 9, 10, 11, 3, 9, 3, 10, 10, 3, 11, 3, 9, 3, 3, 7, 10, 11, 7, 9]
let currentCombo = []
var index = 0
let switchScenes = false

let row = 300
let spot = 200
let comboNumber = 1
let displayIndex = 0
let comboDisplay = "__ _ _ _ _ _ __ __ _ _ _ __ __ _ __ _ _ _ _ _ __ __ _ _"
let comboDisplayReset = "__ _ _ _ _ _ __ __ _ _ _ __ __ _ __ _ _ _ _ _ __ __ _ _"
let comboDisplayDEBUG = "11 3 9 3 9 9 10 11 3 9 3 10 10 3 11 3 9 3 3 7 10 11 7 9"