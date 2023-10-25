<template>
  <div class="board">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <Tile v-for="(cell, cellIndex) in row" :key="rowIndex + cellIndex" :value="cell.value" />
    </div>
  </div>
</template>

<script>
import Tile from './Tile.vue';

export default {
  components: {
    Tile,
  },

  props: {
    board: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  display: flex;
}

.row {
  display: flex;
}

</style>