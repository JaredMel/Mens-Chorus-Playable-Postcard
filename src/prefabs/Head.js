class Head extends Phaser.GameObjects.Sprite {
    constructor(scene, codeNum, x, y, image, syn) {
        let hitarea = new Phaser.Geom.Circle(16, 16, 16)
        super(scene, x, y, image).setScale(2, 2).setOrigin(0.5,0.5).setInteractive(hitarea, Phaser.Geom.Circle.Contains)

        this.parentScene = scene // maintain scene context

        this.parentScene.add.existing(this) // add to existing scene, displayList, updateList

        this.on('pointerdown', function () {
            currentCombo[index] = codeNum
            //console.log(notes[index]) // DEBUG
            if (currentCombo[index] == correctCombo[index]) {
                syn.triggerAttackRelease(notes[index], "16n")
                comboDisplay += comboDisplayDEBUG[displayIndex] + comboDisplayDEBUG[displayIndex+1] + " "
                displayIndex += 3
                if (currentCombo.length == correctCombo.length) {
                    switchScenes = true
                } else {
                    index++;
                }
            } else {
                // Play Incorrect
                syn.triggerAttackRelease(comboNote[codeNum-1], "16n")
                comboDisplay = comboDisplayReset
                displayIndex = 0
                console.log("reset") // DEBUG
                currentCombo = []
                index = 0
            }
        })
    }

    replaceChar(origString, replaceChar, index) {
        let firstPart = origString.substr(0, index);
        let lastPart = origString.substr(index + 1);
      
        let newString = firstPart + replaceChar + lastPart;
        return newString;
    }
}