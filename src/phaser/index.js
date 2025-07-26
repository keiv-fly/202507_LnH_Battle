import Phaser from 'phaser';

// Import scenes (you'll create these later)
// import BattleScene from './scenes/battleScene.js';
// import MenuScene from './scenes/menuScene.js';

// Temporary simple scene for testing
class TestScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TestScene' });
    }

    preload() {
        // Hide loading message
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }

    create() {
        // Create a simple test display
        const titleText = this.add.text(400, 200, 'LnH Battle', {
            fontSize: '48px',
            fill: '#ffffff',
            fontWeight: 'bold'
        }).setOrigin(0.5);

        const newGameText = this.add.text(400, 250, 'New Game', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        const subtitleText = this.add.text(400, 300, 'Turn-based Battle Arena', {
            fontSize: '24px',
            fill: '#cccccc'
        }).setOrigin(0.5);

        const infoText = this.add.text(400, 360, 'Click to continue', {
            fontSize: '18px',
            fill: '#888888'
        }).setOrigin(0.5);

        // Add click handler for the menu item
        newGameText.on('pointerdown', () => {
            // Clear screen by setting background color and hiding text
            this.cameras.main.setBackgroundColor('#2e2e2e');
            titleText.setVisible(false);
            newGameText.setVisible(false);
            subtitleText.setVisible(false);
            infoText.setVisible(false);
        });

        // Add a simple animated element
        const logo = this.add.rectangle(400, 450, 100, 30, 0x444444);
        this.tweens.add({
            targets: logo,
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 1000,
            yoyo: true,
            repeat: -1
        });
    }
}

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
        TestScene
        // Add your actual scenes here later:
        // MenuScene,
        // BattleScene
    ]
};

// Create and start the game
const game = new Phaser.Game(config);

// Export for potential debugging
window.game = game;

console.log('LnH Battle initialized!');