function preload() {
    this.load.image('player', 'assets/repl.png');
    this.load.image('background', 'assets/backgrounds/real-beach-background.jpg');
    this.load.audio('theme', [
        'assets/sounds/theme-bahamian-days-of-christmas.ogg',
        'assets/sounds/theme-bahamian-days-of-christmas.mp3'
    ]);

    this.load.image("tree", "assets/sprites/palm-tree.png")

    
}

function create() {
    this.add.image(200, 200, "background");
    
    //music
    var music = this.sound.add('theme');
    music.play();

    var tree = this.add.sprite("200", "200", "tree");
    tree.scale = 0.5;

    
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