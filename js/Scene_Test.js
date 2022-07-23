class Scene_Test extends Phaser.Scene {
    constructor() {
        super('localAssets')
    }


    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.spritesheet('dude',
            'assets/dude.png', { frameWidth: 32, frameHeight: 48 }
        );
    }

    create() {
        this.background = this.add.image(400, 300, 'sky')
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(333, 610, 'platform').setScale(1.8).refreshBody();
        this.platforms.create(600, 400, 'platform');
        this.platforms.create(50, 200, 'platform');
        this.platforms.create(750, 270, 'platform');

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 5,
            repeat: -1
        });

        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();


    }

    update() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-120);
            this.player.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.play('right');
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityX(0);
            this.player.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

}