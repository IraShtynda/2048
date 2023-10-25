<template>
  <div class="game">
    <HeadBoard 
      @clickButton="clickButton" 
      :gameStatus="gameStatus"
      :score="gameService.totalScore"
      :bestScore="gameService.bestScore"
    />
    <Board :board="board" />
    <p class="game-message" v-if="message">{{message}}</p>
  </div>
</template>

<script>
import HeadBoard from './HeadBoard.vue';
import Board from './Board.vue';
import GameService from '../utils/GameService';
import Storage from '../utils/Storage';

export default {
  components: {
    HeadBoard,
    Board
  },

  data() {
    const gameService = new GameService(new Storage());

    return {
      board: gameService.generateBoard(),
      gameStatus: 'notStarted',
      gameService,
      message: '',
    };
  },

  methods: {
    clickButton() {
      if (this.gameStatus === 'notStarted') {
        document.addEventListener('keydown', this.handleKeyDown);

        this.board = this.gameService.addATile(this.board);
        this.board = this.gameService.addATile(this.board);

        this.gameStatus = 'playing';
      } else if (this.gameStatus === 'playing') {
        this.board = this.gameService.generateBoard();

        this.gameService.maxMergedTilePoint = 0;
        this.gameService.totalScore = 0;

        this.board = this.gameService.addATile(this.board);
        this.board = this.gameService.addATile(this.board);
      }
    },

    handleKeyDown(event) {
      const direction = event.code.replace('Arrow', '').toLowerCase();
      const prevBoard = this.gameService.copyBoard(this.board);
      let newBoard;

      switch (direction) {
        case 'right':
          newBoard = this.gameService.moveRight(this.board);
          break;
        case 'up':
          newBoard = this.gameService.moveUp(this.board);
          break;
        case 'left':
          newBoard = this.gameService.moveLeft(this.board);
          break;
        case 'down':
          newBoard = this.gameService.moveDown(this.board);
          break;
        default:
          break;
      }

      if (newBoard && !this.gameService.areSame(prevBoard, newBoard)) {
        this.board = this.gameService.addATile(newBoard);

        if (!this.gameService.canMove(this.board)) {
          this.gameService.saveScore();

          this.message = `GAME OVER. Your score: ${this.gameService.totalScore}`;
        }
      }
    },
  },

  computed: {
    target() {
      return this.gameService.targetPoint;
    },
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleKeyDown);

    clearTimeout(this.setTimeoutId);
  },

  watch: {
    target() {
      this.message = `Your new target ${this.target}`;

      clearTimeout(this.setTimeoutId);

      setTimeoutId = setTimeout(() => {
        this.message = '';
      }, 5000);
    },
  },
};
</script>

<style>
.game {
  margin: auto;
  padding: 10px;
  background-color: black;
}
.game-message {
  color: white;
  margin: 10px;
}
</style>