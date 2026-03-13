class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('background', 'background_image.png')
        this.load.image('temp', 'TempHead.png')
        this.load.image('jared', 'Jared_Head.png')
        this.load.image('aiden', 'Aiden_Head.png')
        this.load.image('alex', 'Alex_Head.png')
        this.load.image('colby', 'Colby_Head.png')
        this.load.image('drew', 'Drew_Head.png')
        this.load.image('jack', 'Jack_Head.png')
        this.load.image('jaden', 'Jaden_Head.png')
        this.load.image('landon', 'Landon_Head.png')
        this.load.image('nathan', 'Nathan_Head.png')
        this.load.image('parker', 'Parker_Head.png')
        this.load.image('seth', 'Seth_Head.png')
        this.load.image('vince', 'Vince_Head.png')
        this.load.image('back', 'back_of_card.png')
        this.load.image('stamp', 'postcard_stamp.png')
        this.load.image('quarter', 'Quarter_Note.png')
        this.load.image('eighth', 'Eighth_Note.png')
        this.load.image('sixteenth', 'Sixteenth_Note.png')
        this.load.spritesheet('envelope', 'Envelope_Opening.png', {
            frameWidth: 48,
            frameHeight: 64
        })
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

        // texts
        let textConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '25px',
            color: '#ffffff',
            align: 'left',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.add.text(game.config.width/10, game.config.height/10, 'CREDITS:\nBackground Images:\nNote Images:\nOther Assets & Coding: Jared Melendez', textConfig)
        textConfig.align = 'center'
        this.add.text(game.config.width/3, game.config.height/1.5, 'Click on the Envelope to Begin', textConfig)
    }

    update() {
        // check if switchScene
        if (switchScenes) {
            this.clock.paused = false
            switchScenes = false
        }
    }
}