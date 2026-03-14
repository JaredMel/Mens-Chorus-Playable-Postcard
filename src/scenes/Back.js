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

        // text
        this.add.text(game.config.width/1.4, 340, "Drew Gloria\n123 NotSharingThat\n######\nCA\nUSA🦅", messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/5, game.config.height/6, "3/12/2026\nSanta Cruz, CA", messageConfig).setOrigin(0.5)
        this.message = this.add.text(game.config.width/4, game.config.height/2, "Send me $5", messageConfig).setOrigin(0.5)

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