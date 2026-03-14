class Back extends Phaser.Scene {
    constructor() {
        super('backScene')
    }

    create() {
        // background
        this.add.image(0, 0, 'back').setOrigin(0)
        let rick = this.add.image(785, 130, 'stamp').setInteractive()

        // scene transition animation
        const gameDiv = document.getElementById("phaser-game")
        gameDiv.classList.add('flip-in')
        this.flipSceneClock = this.time.delayedCall(1000, () => {
            gameDiv.classList.remove('flip-in')
        })

        // get rick rolled gamer
        rick.on('pointerdown', () => {
            window.open('https://youtu.be/dQw4w9WgXcQ?si=Jkc5B4pV6iaqHAHE', '_blank')
        })

        // text
        this.add.bitmapText(game.config.width/1.4, 340, 'momstype', "Drew Gloria\n123 NotSharingThat\n######\nCA\nUSA").setOrigin(0.5).setLeftAlign().setFontSize(28).setLineSpacing(35)
        this.add.bitmapText(game.config.width/5, game.config.height/6, 'momstype', "3/12/2026\nSanta Cruz, CA").setOrigin(0.5).setLeftAlign().setFontSize(30)
        this.message = this.add.bitmapText(game.config.width/4, game.config.height/2, 'momstype', "Send me $5").setOrigin(0.5).setLeftAlign().setFontSize(40)

        // Reset game button (PRESS R)
        this.reset = this.input.keyboard.addKey('R')
    }

    update() {
        // reset game
        if (Phaser.Input.Keyboard.JustDown(this.reset)) {
            window.location.reload()
        }
    }
}