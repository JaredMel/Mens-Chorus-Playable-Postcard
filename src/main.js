// Title: Men's Chorus Playable Postcard
// Author: Jared Melendez
// Hours Spent: 
// Citations: Nate Laffen - https://github.com/laffan/120-phaser-audio-examples
//            Used some of his code as a start for manipulating Tone.js 
//            (specifically making the song that plays after the correct combo)
"use strict"

let config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    scene: [ Front, Back]
}
let game = new Phaser.Game(config)

const correctCombo = [11, 3, 9, 3, 9, 9, 10, 11, 3, 9, 3, 10, 10, 3, 11, 3, 9, 3, 3, 7, 11, 11, 7, 9]
const notes = ["C4", "D4", "F4", "D4", "F4", "F4", "E4", "C4", "D4", "F4", "D4", "E4", "E4", "D4", "C4", "D4", "F4", "D4", "D4", "G4", "C4", "C4", "G4", "F4"]
let currentCombo = []
var index = 0
let switchScenes = false
let playNote = false

let row = 300
let spot = 200
let comboNumber = 1
let displayIndex = 0
let comboDisplay = "__ _ _ _ _ _ __ __ _ _ _ __ __ _ __ _ _ _ _ _ __ __ _ _"
let comboDisplayReset = "__ _ _ _ _ _ __ __ _ _ _ __ __ _ __ _ _ _ _ _ __ __ _ _"
let comboDisplayDEBUG = "11 3 9 3 9 9 10 11 3 9 3 10 10 3 11 3 9 3 3 7 11 11 7 9"