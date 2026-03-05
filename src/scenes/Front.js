class Front extends Phaser.Scene {
    constructor() {
        super('frontScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('temp', 'art/TempHead.png')
    }

    create() {
        let head = new Head(this, 0, game.config.width/2, game.config.height/2)
        let head2 = new Head(this, 1, game.config.width/1.5, game.config.height/1.5)

        this.input.enableDebug(head) // DEBUG
    }

    update() {
        if (switchScenes) {
            this.scene.start('backScene')
        }
    }
}