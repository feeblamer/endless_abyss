class Scene_Main extends Phaser.Scene {
    constructor() {
        super('phaserAssets')
    }


    preload() {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/gradient22.png');
        this.load.image('man', 'assets/sprites/phaser3-logo.png');
        this.load.image('smoke', 'assets/particles/smoke-puff.png');
        this.load.spritesheet('dude',
            'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 },
        );
    }

    create() {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('smoke');

        var emitter = particles.createEmitter({
            speed: 80,
            scale: { start: 1, end: 0 },
            blendMode: 'ERASE'
        });

        var logo = this.physics.add.image(10, 10, 'dude', 4);

        logo.setVelocity(10, 20);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

}