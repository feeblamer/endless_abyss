class Scene_Test extends Phaser.Scene {
    constructor() {
        super('localAssets')
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.spritesheet('sticky',
            'assets/stikguy.png', { frameWidth: 32, frameHeight: 48 }
            );    
        this.load.spritesheet('girl',
            'assets/dudy.svg', { frameWidth: 32, frameHeight: 48 }
            );
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

        this.player = new Dude(this, 400, 300, 'girl');
        
        this.player2 = new Dude(this, 300, 400, 'dude');

        this.player3 = new Dude(this, 200, 200, 'sticky');

        this.player4 = new Dude(this, 100, 100, 'sticky');

        this.player.create_anims()

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.player2);


    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-100);
            this.player.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(100);
            this.player.play('right');
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityX(0);
            this.player.play('turn');
        }

       if (this.cursors.space.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-300);
        }
    }

}