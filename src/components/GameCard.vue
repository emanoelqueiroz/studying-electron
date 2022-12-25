<script setup>

function openGame(path) {
  os.openGame(path)
}

</script>

<template>
  <img :src="imgSrc" @click="openGame(path)" class="game-card" width="150" height="225" />
</template>

<style lang="scss" scoped>
.game-card {
  cursor: pointer;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
}
</style>