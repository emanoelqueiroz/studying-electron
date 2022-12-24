<script setup>
import Card from './Card/Index.vue'

function openGame(path) {
  os.openGame(path)
}
</script>

<template>
  <Card>
    <template #header>
      Games
    </template>
    <template #content>
      <img class="game-card" @click="openGame('/Downloads/World of Warcraft 3.3.5a/Wow.exe')"
        src="../assets/wowotlk.png" width="150" height="225" />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
img {
  margin-top: 13px;
}

.game-card {
  cursor: pointer;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
}
</style>