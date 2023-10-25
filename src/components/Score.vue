<template>
  <div class="score-wrapper">
    <div class="score-title" v-if="title">{{title}}</div>
    <div class="score">{{score}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    score: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.score-wrapper {
  background-color: #373737;
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
  justify-content: space-around;
  color: white;
  font-size: 0.75rem;
}
</style>