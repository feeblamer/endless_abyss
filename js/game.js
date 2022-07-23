var config = {
    type: Phaser.AUTO,
    /*width: 800,
    height: 600,*/
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Scene_Test],
    parent: 'game',
    scale: {
        parent: 'game',
        width: 800,
        height: 600,
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
};

var game = new Phaser.Game(config);