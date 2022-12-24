<script setup>
import { ref } from 'vue'
import Card from './Card/Index.vue'

let cpus = ref([{}])
os.cpus().then(data => cpus.value = data)
</script>

<template>
  <Card>
    <template #header>
      CPUs
    </template>
    <template #content>
      <ul>
        <li>
          <span>Model:</span>
          {{ cpus[0].model }}
        </li>
        <li>
          <span>Number of Cores:</span>
          {{ cpus.length }}
        </li>
      </ul>
    </template>
  </Card>
</template>