import Phaser from 'phaser';

import BattleScene from './scenes/battleScene.js';
import MenuScene from './scenes/menuScene.js';

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
      debug: false,
    },
  },
  scene: [MenuScene, BattleScene],
};

const game = new Phaser.Game(config);

window.game = game;

console.log('LnH Battle initialized!');
