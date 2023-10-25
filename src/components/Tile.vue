<template>
  <div class="tile" :style="backgroundStyle">{{ getValue }}</div>
</template>

<script>
const tileColors = {
  0: '#373737',
  2: '#7504C2',
  4: '#F3135C',
  8: '#FFCB17',
  16: '#00C418',
  32: '#551584',
  64: '#D0007A',
  128: '#FF5518',
  256: '#29D7A4',
  512: '#0A96D3',
  1024: '#FF0024',
  2048: '#5F079B',
};

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    backgroundStyle() {
      return { 'background-color': tileColors[this.value] };
    },

    getValue() {
      return this.value ? this.value : '';
    },
  },
};
</script>


<style scoped>
.tile {
  width: 80px;
  height: 80px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>