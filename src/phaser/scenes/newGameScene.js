import Phaser from 'phaser';

export default class NewGameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'NewGameScene' });
    }

    create() {
        // Set background color to gray
        this.cameras.main.setBackgroundColor('#2e2e2e');
    }
}
