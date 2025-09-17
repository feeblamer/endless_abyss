class Dude extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y, img) {
		super(scene, x, y, img);
		scene.physics.add.existing(this);
		this.setBounce(0.2);
		this.setCollideWorldBounds(true);
		scene.add.existing(this);
		scene.physics.add.collider(this, scene.platforms);
		this.scene = scene
		this.key_img = img
	}

	create_anims(){

		this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.key_img, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: this.key_img, frame: 4 }],
            frameRate: 10
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.key_img, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
	}
}