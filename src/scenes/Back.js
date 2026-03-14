class Back extends Phaser.Scene {
    constructor() {
        super('backScene')
    }

    create() {
        // background
        this.add.image(0, 0, 'back').setOrigin(0)
        this.add.image(785, 130, 'stamp')

        // texts
        let messageConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '40px',
            color: '#000000',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width/1.4, 340, "Drew Gloria\n123 NotSharingThat\n######\nCA\nUSA🦅", messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/5, game.config.height/6, "3/12/2026\nSanta Cruz, CA", messageConfig).setOrigin(0.5)
        this.message = this.add.text(game.config.width/4, game.config.height/2, "Send me $5", messageConfig).setOrigin(0.5)
    }

    update() {

    }
}