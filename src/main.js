// Title: Men's Chorus Playable Postcard
// Author: Jared Melendez
// Hours Spent: 
// Citations: Nate Laffen - https://github.com/laffan/120-phaser-audio-examples
//            Used some of his code as a start for manipulating Tone.js 
//            (specifically making the song that plays after the correct combo)
"use strict"

let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    render: {
        pixelArt: true
    },
    scene: [ Menu, Front, Back ]
}
let game = new Phaser.Game(config)

const correctCombo = [11, 3, 9, 3, 9, 9, 10, 11, 3, 9, 3, 10, 10, 3] // array to compare too
const noteLengths = ['sixteenth', 'sixteenth', 'sixteenth', 'sixteenth', 'eighth', 'eighth', 'quarter', 'sixteenth', 'sixteenth', 'sixteenth', 'sixteenth', 'eighth', 'eighth', 'quarter'] // array of note types following the actual song (used for the emitters to emit the correct note)
let currentCombo = [] // array to be compared 
var index = 0 // index variable for currentCombo
let switchScenes = false // checker for switching scenes
let turnOnGlow = false // checker for glow
let glowEffect // glowEffect variable to keep track of the correct FX
let glowHead // glowHead variable to keep track of the head with the FX
let resetGlowClock = false // checker for reseting the glowClock
let glowIsOn = false // checker for if a head is already glowing
let hideInstructions = false // checker for hiding instructions

let row = 400 // row value used to place people on the correct row
let spot = 200 // spot value used to place people on the correct spot
let comboNumber = 1 // comboNumber which is given to every head and will be used to compare the two arrays
let comboNote = ["E5", "B3", "D4", "A4", "D5", "B4", "G4", "C5", "F4", "E4", "C4", "A3"] // array of notes that play for each person
let displayIndex = 0 // index for the comboDisplay
let comboDisplay = "" // string for displaying the current combo being tested
let comboDisplayReset = "" // string to reset when wrong note is guessed
let comboDisplayDEBUG = "C4 D4 F4 D4 F4 F4 E4 C4 D4 F4 D4 E4 E4 D4" // string to display correct combination (Debugging purposes)