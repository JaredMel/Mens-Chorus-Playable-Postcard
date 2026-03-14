class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('background', 'BackgroundImages/background.png')
        this.load.image('temp', 'Heads/TempHead.png')
        this.load.image('jared', 'Heads/Jared_Head.png')
        this.load.image('aiden', 'Heads/Aiden_Head.png')
        this.load.image('alex', 'Heads/Alex_Head.png')
        this.load.image('colby', 'Heads/Colby_Head.png')
        this.load.image('drew', 'Heads/Drew_Head.png')
        this.load.image('jack', 'Heads/Jack_Head.png')
        this.load.image('jaden', 'Heads/Jaden_Head.png')
        this.load.image('landon', 'Heads/Landon_Head.png')
        this.load.image('nathan', 'Heads/Nathan_Head.png')
        this.load.image('parker', 'Heads/Parker_Head.png')
        this.load.image('seth', 'Heads/Seth_Head.png')
        this.load.image('vince', 'Heads/Vince_Head.png')
        this.load.image('back', 'BackgroundImages/back_of_card.png')
        this.load.image('stamp', 'Other/postcard_stamp.png')
        this.load.image('quarter', 'Notes/Quarter_Note.png')
        this.load.image('eighth', 'Notes/Eighth_Note.png')
        this.load.image('sixteenth', 'Notes/Sixteenth_Note.png')
        this.load.spritesheet('envelope', 'Other/Envelope_Opening.png', {
            frameWidth: 48,
            frameHeight: 64
        })
        this.load.bitmapFont('momstype', 'BitmapFont/MomsTypewriter.png', 'BitmapFont/MomsTypewriter.xml')
    }

    create() {
        // envelope
        this.envelope = this.add.sprite(game.config.width/2, game.config.height/2, 'envelope', 0).setOrigin(0.5).setScale(3).setInteractive()

        // envelope animation
        this.anims.create({
            key: 'opening',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('envelope', {
                start: 1,
                end: 7
            })
        })

        // clock to switch scenes
        this.clock = this.time.delayedCall(1000, () => {
            this.scene.start('frontScene')
        })
        this.clock.paused = true

        // envelope when clicked on
        this.envelope.on('pointerdown', function () {
            switchScenes = true
            this.play('opening', true)
        })

        // text
        this.add.bitmapText(game.config.width/10, game.config.height/10, 'momstype', 'CREDITS:\nBackground Images: AlgesCorp & AdobeStock\nPartcle Effects: Liam Pitcher\nMusic: Teacher Valarie\nFont: Christoph Mueller\nOther Assets & Coding: Jared Melendez').setFontSize(25)
        this.add.bitmapText(game.config.width/4.25, game.config.height/1.5, 'momstype', 'Click on the Envelope to Begin\nPress "R" at anytime to reset').setFontSize(25).setCenterAlign()

        // Reset game button (PRESS R)
        this.reset = this.input.keyboard.addKey('R')
    }

    update() {
        // check if switchScene
        if (switchScenes) {
            this.clock.paused = false
            switchScenes = false
        }
        // reset game
        if (Phaser.Input.Keyboard.JustDown(this.reset)) {
            window.location.reload()
        }
    }
}