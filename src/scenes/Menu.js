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
        this.envelope = this.add.sprite(game.config.width/2, game.config.height/2, 'envelope', 0).setOrigin(0.5).setScale(3)

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
        this.envelope.play('opening', true)
    }

    update() {
        //this.scene.start('frontScene') // DEBUG
    }
}