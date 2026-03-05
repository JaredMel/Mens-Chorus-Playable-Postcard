class Head extends Phaser.GameObjects.Sprite {
    constructor(scene, codeNum, x, y) {
        let hitarea = new Phaser.Geom.Circle(16, 16, 16)
        super(scene, x, y, 'temp').setOrigin(0.5,0.5).setInteractive(hitarea, Phaser.Geom.Circle.Contains)

        this.parentScene = scene // maintain scene context

        this.parentScene.add.existing(this) // add to existing scene, displayList, updateList

        this.on('pointerdown', function () {
            currentCombo[index] = codeNum
            console.log(currentCombo[index]) // DEBUG
            if (currentCombo[index] == correctCombo[index]) {
                if (currentCombo.length == correctCombo.length) {
                    switchScenes = true
                }
            } else {
                console.log("reset") // DEBUG
                currentCombo = []
                index = 0
            }
        })
    }
}