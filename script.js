function preload() {
    this.load.image('player', 'assets/repl.png');
    this.load.image('background', 'assets/backgrounds/real-beach-background.jpg');
    this.load.audio('theme', [
        'assets/sounds/theme-bahamian-days-of-christmas.ogg',
        'assets/sounds/theme-bahamian-days-of-christmas.mp3'
    ]);

    this.load.image("tree", "assets/sprites/pngegg.png")

    //Load Decorations
    this.load.image("ornament3", "assets/sprites/tropical_ornament_3.png")
    
}

function create() {
    var dragPosition;
    
    background = this.add.image(200, 200, "background");
    background.setScale(1.5);
    
    //music
    music = this.sound.add('theme');
    music.play();

    var tree = this.add.sprite("300", "250", "tree");
    tree.setScale(0.2);    

    //Decorations
    var ornament3 = this.add.sprite("100", "400", "ornament3");
    ornament3.setScale(0.03);

    ornament3.inputEnabled = true;
    ornament3.input.enableDrag();

    ornament3.events.onInputOver.add(onOver, this);
    ornament3.events.onInputOut.add(onOut, this);
    ornament3.events.onDragStart.add(onDragStart, this);
    ornament3.events.onDragStop.add(onDragStop, this);

    dragPosition = new Phaser.Point(ornament3.x, ornament3.y);
}

function onOver(sprite, pointer) {

    sprite.tint = 0xff7777;

}

function onOut(sprite, pointer) {

    sprite.tint = 0xffffff;

}

function onDragStart(sprite, pointer) {

    dragPosition.set(sprite.x, sprite.y);

}

function onDragStop(sprite, pointer) {

    if (!sprite.overlap(dropZone))
    {
        game.add.tween(sprite).to( { x: dragPosition.x, y: dragPosition.y }, 500, "Back.easeOut", true);
    }

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