<script setup>
import CpuCard from './components/CpuCard.vue'
import MemoryCard from './components/MemoryCard.vue'
import VersionsCard from './components/VersionsCard.vue'
</script>

<template>
  <main>
    <div class="os-info-cards">
      <VersionsCard />
      <CpuCard />
      <MemoryCard />
    </div>
    <div></div>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(153, 119, 251, 0.7) 0%, rgba(221, 50, 49, 0.7) 100%);
  font-family: Arial, Helvetica, sans-serif;
  background-attachment: fixed;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 5px 0;
  }

  li span {
    font-weight: 600;
  }
}

.os-info-cards {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 13px;
  column-gap: 13px;
  padding: 13px;
}
</style>
