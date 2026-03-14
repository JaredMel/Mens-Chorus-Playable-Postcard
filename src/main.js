// Title: Men's Chorus Playable Postcard
// Author: Jared Melendez
// Hours Spent: ~40 hours
// Citations: Nate Laffen - https://github.com/laffan/120-phaser-audio-examples
//            Used some of his code as a start for manipulating Tone.js 
//            (specifically making the song that plays after the correct combo)
//            AlgesCorp - https://algescorp.com/product/risers.html
//            used one of the images of their risers as a background image
//            AdobeStock - https://stock.adobe.com/search?k=postcard+back
//            used one of the images for the back of the postcard
//            Rick Astley - https://www.youtube.com/watch?v=dQw4w9WgXcQ
//            used his music to parody it using Tone.js and used a picture
//            of him as a stamp
//            Teacher Valarie - https://www.etsy.com/no-en/listing/1168059028/never-gonna-give-you-up-rick-roll-chorus?dd_referrer=https%3A%2F%2Fwww.google.com%2F
//            used this sheet music to base the parody of it in Tone.js
//            Liam Pitcher - https://www.liampitcher.com/classical-music-blog/note-values
//            used their pictures of notes for particle effects
//            Christoph Mueller - https://www.dafont.com/moms-typewriter.font
//            used his Mom's Typewriter Font
// Aesthetic Cohesion : For this project I wanted to primarly use stock photos
// as I felt that they better represented what a postcard looks like with the 
// exception of the opening postcardanimation and everyones bodies as I just 
// didn't find any good clothing only stock photos that would work well with 
// the note names being on them and were multicolored enough. Hopefully these 
// don't stick out too much to you.
// Creative Tilt : I got to try and use a lot of new things for this project
// but I would say the most intereset parts were being able to use Tone.js, 
// using Photoshop to cut out the heads of my friends from photos I had, and
// making the scene transition from the front of the card to the back. Each
// of these was something I had no idea how to do at first but after looking
// through different documentation and other's projects (thank you Nate Laffen)
// I managed to get each to work incredibly well. There are a few features you
// might have missed so I'll put them here, if you wait 10 seconds while trying
// guess the next note a glow effect will appear behind the next persons head,
// and theres an easter egg if you click on the postcard stamp on the last scene.
// Finally there is a debug option for if you just want to see the correct combination
// when guessing the song, just click "Z" and at the bottom of the screen the correct
// combination will be visible.
//
"use strict"

let config = {
    parent: 'phaser-game',
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    backgroundColor: '0x84c8ff',
    render: {
        pixelArt: true
    },
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
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