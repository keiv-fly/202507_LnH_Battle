import Phaser from 'phaser';

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'battle' });
  }

  create() {
    this.cameras.main.setBackgroundColor('#2e2e2e');
  }
}
