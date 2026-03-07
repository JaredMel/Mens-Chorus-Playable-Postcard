class Front extends Phaser.Scene {
    constructor() {
        super('frontScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.image('temp', 'art/TempHead.png')
    }

    create() {
        // synths
        this.synth = new Tone.Synth().toDestination();
        const songSynth = new Tone.PolySynth(Tone.Synth).toDestination();

        // create and place heads
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                new Head(this, comboNumber, spot, row, 'temp', this.synth)
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

        // song to play after correct combination
        const notes2 = [
        { time: '0:3', note: 'C4', dur: '16n' },
        { time: '0:3.25', note: 'D4', dur: '16n' },
        { time: '0:3.5', note: 'F4', dur: '16n' },
        { time: '0:3.75', note: 'D4', dur: '16n' },
        { time: '1:0', note: 'F4', dur: '8n.' },
        { time: '1:0.75', note: 'F4', dur: '8n.' },
        { time: '1:1.5', note: 'E4', dur: '4n.' },
        { time: '1:3', note: 'C4', dur: '16n' },
        { time: '1:3.25', note: 'D4', dur: '16n' },
        { time: '1:3.5', note: 'F4', dur: '16n' },
        { time: '1:3.75', note: 'D4', dur: '16n' },
        { time: '2:0', note: 'E4', dur: '8n.' },
        { time: '2:0.75', note: 'E4', dur: '8n.' },
        { time: '2:1.5', note: 'D4', dur: '4n.' },
        { time: '2:3', note: 'C4', dur: '16n' },
        { time: '2:3.25', note: 'D4', dur: '16n' },
        { time: '2:3.5', note: 'F4', dur: '16n' },
        { time: '2:3.75', note: 'D4', dur: '16n' },
        { time: '3:0', note: 'D4', dur: '4n' },
        { time: '3:1', note: 'G4', dur: '8n' },
        { time: '3:1.5', note: 'C4', dur: '2n' },
        { time: '3:3.5', note: 'C4', dur: '8n' },
        { time: '4:0', note: 'G4', dur: '4n' },
        { time: '4:1', note: 'F4', dur: '2n' },
        ];
        this.song = new Tone.Part((time, val) => {
        songSynth.triggerAttackRelease(val.note, val.dur, time);
        }, notes2);
        
        this.clock = this.time.delayedCall(10000, () => {
            this.scene.start('backScene')
        })
        this.clock.paused = true
    }

    update() {
        this.comboDisplayText.text = comboDisplay
        if (switchScenes) {
            //this.scene.start('backScene')
            Tone.start().then(() => {
                Tone.Transport.start();
                this.song.start(0);
                this.clock.paused = false
            })
        }
        
    }
}