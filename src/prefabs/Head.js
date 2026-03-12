class Head extends Phaser.GameObjects.Sprite {
    constructor(scene, codeNum, x, y, image, syn) {
        super(scene, x, y, image).setScale(2, 2).setOrigin(0.5,0.5).setInteractive()

        this.parentScene = scene // maintain scene context

        this.parentScene.add.existing(this) // add to existing scene, displayList, updateList

        this.on('pointerdown', function () {
            currentCombo[index] = codeNum
            if (glowIsOn) {
                glowHead.postFX.remove(glowEffect)
            }
            glowIsOn = false
            if (currentCombo[index] == correctCombo[index]) {
                syn.triggerAttackRelease(notes[index], "16n")
                comboDisplay += comboDisplayDEBUG[displayIndex] + comboDisplayDEBUG[displayIndex+1] + " "
                displayIndex += 3
                if (currentCombo.length == correctCombo.length) {
                    switchScenes = true
                } else {
                    resetGlowClock = true
                    index++;
                }
            } else {
                // Play Incorrect
                syn.triggerAttackRelease(comboNote[codeNum-1], "16n")
                comboDisplay = comboDisplayReset
                displayIndex = 0
                currentCombo = []
                index = 0
                resetGlowClock = true
            }
        })
    }
}