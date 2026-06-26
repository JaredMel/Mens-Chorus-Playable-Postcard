class Head extends Phaser.GameObjects.Sprite {
    constructor(scene, codeNum, x, y, image, syn, emit) {
        super(scene, x, y, image).setScale(0.15).setOrigin(0.5,0.5).setInteractive()

        this.parentScene = scene // maintain scene context

        this.parentScene.add.existing(this) // add to existing scene, displayList, updateList

        // listener for if head is clicked on
        this.on('pointerdown', function () {
            currentCombo[index] = codeNum // set code number to the current combination spot
            hideInstructions = true // hides initial instructions
            if (glowIsOn) { // check if glow is on if so
                glowHead.postFX.remove(glowEffect) // turn it off
            }
            glowIsOn = false // reset checker
            if (currentCombo[index] == correctCombo[index] && !switchScenes) { // check if correct combo
                syn.triggerAttackRelease(comboNote[codeNum-1], "16n") // play note
                emit.setTexture(noteLengths[index]) // set the emitters texture to the correct type of note
                emit.explode(8) // play explode
                comboDisplay += comboDisplayDEBUG[displayIndex] + comboDisplayDEBUG[displayIndex+1] + " " // update comboDisplay string
                displayIndex += 3 // update comboDisplay's string index
                if (currentCombo.length == correctCombo.length) { // check if correct combo has been solved
                    switchScenes = true // update switchScenes
                } else { // if not
                    resetGlowClock = true // reset glow clock
                    index++; // increment index
                }
            } else if(!switchScenes){ // if incorrect
                syn.triggerAttackRelease(comboNote[codeNum-1], "16n") // play note
                comboDisplay = comboDisplayReset // reset comboDisplay string
                displayIndex = 0 // reset display index
                currentCombo = [] // reset current combo
                index = 0 // reset index
                resetGlowClock = true // reset glowClock
            }
        })
    }
}