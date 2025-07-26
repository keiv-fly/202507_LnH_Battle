import Phaser from 'phaser';

// Import scenes
import MenuScene from './scenes/menuScene.js';
import NewGameScene from './scenes/newGameScene.js';


// Phaser game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#1a1a2e',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        MenuScene,
        NewGameScene
    ]
};

// Create and start the game
const game = new Phaser.Game(config);

// Export for potential debugging
window.game = game;

console.log('LnH Battle initialized!');