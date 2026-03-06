class Back extends Phaser.Scene {
    constructor() {
        super('backScene')
    }

    create() {
        // texts
        let messageConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '40px',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.message = this.add.text(game.config.width/2, game.config.height/2, "Send me $5", messageConfig).setOrigin(0.5)
    }

    update() {

    }
}