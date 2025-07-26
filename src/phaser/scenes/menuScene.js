import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  preload() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }
  }

  create() {
    this.add.text(400, 200, 'LnH Battle', {
      fontSize: '48px',
      fill: '#ffffff',
      fontWeight: 'bold',
    }).setOrigin(0.5);

    const newGameText = this.add.text(400, 280, 'New Game', {
      fontSize: '24px',
      fill: '#cccccc',
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    newGameText.on('pointerdown', () => {
      this.scene.start('battle');
    });
  }
}
