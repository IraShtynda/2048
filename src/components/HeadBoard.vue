<template>
  <div class="head-board">
    <h1 class="title">2048</h1>
    <div class="head-board-right">
      <div class="scores">
          <Score title="SCORE" :score="score" />
          <Score title="BEST" :score="bestScore" />
      </div>
      <div class="button" @click="handleClick" :style="buttonStyle">{{ buttonText }}</div>
    </div>
  </div>
</template>


<script>
import Score from './Score.vue';

export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },

    bestScore: {
      type: Number,
      default: 0,
    },

    gameStatus: {
      type: String,
      default: '',
    },
  },

  computed: {
    buttonText() {
      if (this.gameStatus === 'notStarted') {
        return 'Start';
      } if (this.gameStatus === 'playing') {
        return 'Restart';
      }

      return '';
    },
    buttonStyle() {
      return {
        'background-color': this.gameStatus === 'notStarted' ? '#29D7A4' : '#FF0024',
      };
    },
  },

  components: {
    Score,
  },

  methods: {
    handleClick() {
      this.$emit('clickButton');
    },
  },
};
</script>

<style scoped>
.head-board {
  display: flex;
  height: 85px;
  margin: 5px 5px 10px;
  justify-content: space-between;
}

.title {
  color: #FDC91D;
  font-size: 38px;
  text-align: center;
  width: 100%;
}

.head-board-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.scores {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.button {
  color: white;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>