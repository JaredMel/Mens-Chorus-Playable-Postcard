class Front extends Phaser.Scene {
    constructor() {
        super('frontScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('temp', 'art/TempHead.png')
    }

    create() {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                new Head(this, comboNumber, spot, row, 'temp')
                comboNumber++
                spot += 100
            }
            row -= 100
            spot = 200
        }

        // texts
        let comboDisplayConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '30px',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.comboDisplayText = this.add.text(game.config.width/2, game.config.height/6, comboDisplay, comboDisplayConfig).setOrigin(0.5)
        this.comboDisplayTextDEBUG = this.add.text(game.config.width/2, game.config.height - 100, comboDisplayDEBUG, comboDisplayConfig).setOrigin(0.5) // DEBUG
    }

    update() {
        this.comboDisplayText.text = comboDisplay
        if (switchScenes) {
            this.scene.start('backScene')
        }
    }
}