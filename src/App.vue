<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import Game from './components/Game.vue';

export default {
  name: 'app',
  components: {
    Game,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-weight: bold;
  text-align: center;
}
</style>
