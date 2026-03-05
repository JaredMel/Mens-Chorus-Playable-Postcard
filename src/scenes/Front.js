class Front extends Phaser.Scene {
    constructor() {
        super('frontScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('temp', 'art/TempHead.png')
    }

    create() {
        //let hitarea = this.add.circle()
        let head = this.add.image(game.config.width/2, game.config.height/2, 'temp').setOrigin(0.5,0.5).setInteractive()

        head.on('pointerdown', function () {
            currentCombo[index] = 1
            console.log(currentCombo[index])
            if (currentCombo[index] == correctCombo[index]) {
                if (currentCombo.length == correctCombo.length) {
                    switchScenes = true
                }
            }
        })
    }

    update() {
        if (switchScenes) {
            this.scene.start('backScene')
        }
    }
}