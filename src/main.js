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

const correctCombo = [11, 3, 9, 3, 9, 9, 10, 11, 3, 9, 3, 10, 10, 3]
const notes = ["C4", "D4", "F4", "D4", "F4", "F4", "E4", "C4", "D4", "F4", "D4", "E4", "E4", "D4"]
let currentCombo = []
var index = 0
let switchScenes = false
let turnOnGlow = false
let chosen = false

let row = 400
let spot = 200
let comboNumber = 1
let comboNote = ["E5", "B3", "D4", "A4", "D5", "B4", "G4", "C5", "F4", "E4", "C4", "A3"]
let displayIndex = 0
let comboDisplay = ""
let comboDisplayReset = ""
let comboDisplayDEBUG = "C4 D4 F4 D4 F4 F4 E4 C4 D4 F4 D4 E4 E4 D4 C4 D4 F4 D4 D4 G4 C4 C4 G4 F4"