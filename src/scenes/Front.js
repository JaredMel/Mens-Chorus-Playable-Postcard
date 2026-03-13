class Front extends Phaser.Scene {
    constructor() {
        super('frontScene')
    }

    create() {
        // background
        this.add.image(0, 0, 'background').setOrigin(0)

        // synths
        this.synth = new Tone.Synth().toDestination();
        const songSynth = new Tone.PolySynth(Tone.Synth).toDestination();

        // texts
        let comboDisplayConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '25px',
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.comboDisplayText = this.add.text(game.config.width/2, game.config.height/6, comboDisplay, comboDisplayConfig).setOrigin(0.5)
        this.comboDisplayTextDEBUG = this.add.text(game.config.width/2, game.config.height - 50, comboDisplayDEBUG, comboDisplayConfig).setOrigin(0.5) // DEBUG
        this.comboDisplayTextDEBUG.visible = false

        // create and place heads
        const graphics = this.add.graphics({ fillStyle: { color: 0xffffff } });
        let heads = ['jaden', 'jack', 'aiden', 'parker', 'alex', 'colby', 'jared', 'landon', 'drew', 'nathan', 'vince', 'seth']
        this.headArray = []
        let emitterConfig = {
            speed: 200,
            scale: { start: 0.00001, end: 0.03 },
            alpha: {start: 1, end: 0},
            lifespan: { min: 1000, max: 1500, steps: 1000},
            emitting: false
        }
        let comboNoteIndex = 0
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 6; j++) {
                this.emitter = this.add.particles(spot, row, 'eighth', emitterConfig)
                this.temp = new Head(this, comboNumber, spot, row, heads[comboNoteIndex], this.synth, this.emitter)
                this.headArray[comboNoteIndex] = this.temp
                let body = new Phaser.Geom.Rectangle(spot-25, row+25, 50, 100)
                graphics.fillRectShape(body)
                this.add.text(spot, row+60, comboNote[comboNoteIndex], comboDisplayConfig).setOrigin(0.5)
                comboNoteIndex++
                comboNumber++
                spot += 100
            }
            row -= 150
            spot = 200
        }

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
            this.song.stop()
            Tone.Transport.stop()
            this.scene.start('backScene')
        })
        this.clock.paused = true
        
        // timer for glow effect
        this.glowClock = this.time.delayedCall(10000, this.glow, [this.headArray])

        // Debugging info
        this.debug = this.input.keyboard.addKey('Z')
        document.getElementById('info').innerHTML = '<strong>Front.js</strong><br>Z: Show Correct Combination'
    }

    glow(harray) {
        glowEffect = harray[correctCombo[index]-1].postFX.addGlow(0xFFFF33, 4, 0)
        glowHead = harray[correctCombo[index]-1]
        glowIsOn = true
    }

    update() {
        //this.scene.start('backScene') // DEBUG
        this.comboDisplayText.text = comboDisplay
        if (switchScenes) {
            this.glowClock.paused = true
            Tone.start().then(() => {
                Tone.Transport.start()
                this.song.start(0)
                this.clock.paused = false
            })
        }
        if (resetGlowClock) {
            this.time.removeEvent(this.glowClock)
            this.glowClock = this.time.delayedCall(10000, this.glow, [this.headArray])
            resetGlowClock = false
        }
        if (Phaser.Input.Keyboard.JustDown(this.debug)) {
            this.comboDisplayTextDEBUG.visible = !this.comboDisplayTextDEBUG.visible
        }
    }
}