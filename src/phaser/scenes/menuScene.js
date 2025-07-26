import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }

    create() {
        // Title text
        this.add.text(400, 200, 'LnH Battle', {
            fontSize: '48px',
            fill: '#ffffff',
            fontWeight: 'bold'
        }).setOrigin(0.5);

        // Menu item: New Game
        const newGameText = this.add.text(400, 260, 'New Game', {
            fontSize: '32px',
            fill: '#cccccc'
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });

        // Start NewGameScene on click
        newGameText.on('pointerup', () => {
            this.scene.start('NewGameScene');
        });
    }
}
