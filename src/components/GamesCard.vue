<script setup>
import { ref } from 'vue'

import Card from './Card/Index.vue'
import Button from './UI/Button.vue'
import Modal from './AddGameModal.vue'
import GameCard from './GameCard.vue'

let games = ref([])
let isModalShowing = ref(false)

os.getGames().then(data => games.value = data)

function showModal() {
  isModalShowing.value = !isModalShowing.value
}
</script>

<template>
  <Card>
    <template #header>
      Games
    </template>
    <template #content>
      <div class="actions">
        <Button type="button" @click="showModal">Add Game</Button>
        <Modal v-if="isModalShowing" @close-modal="showModal" />
      </div>
      <GameCard v-for="item in games" :src="item.imgSrc" :path="item.path" />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
img {
  margin-top: 13px;
}
</style>