function preload() {
    this.load.image('player', 'assets/repl.png');
    this.load.image('background', 'assets/backgrounds/real-beach-background.jpg');
    this.load.audio('theme', [
        'assets/sounds/theme-bahamian-days-of-christmas.ogg',
        'assets/sounds/theme-bahamian-days-of-christmas.mp3'
    ]);

    this.load.image("tree", "assets/sprites/pngegg.png")

    
}

function create() {
    background = this.add.image(200, 200, "background");
    background.setScale(1.5)
    
    
    //music
    var music = this.sound.add('theme');
    music.play();

    var tree = this.add.sprite("300", "250", "tree");
    tree.setScale(0.2);

    
}

function update() {
    
}

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    backgroundColor: '#f9f9f9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },

    audio: {
        disableWebAudio: true
    }
};

const game = new Phaser.Game(config);