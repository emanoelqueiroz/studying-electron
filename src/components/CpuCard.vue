<script setup>
import { ref } from 'vue'
import Card from './Card/Index.vue'

let cpus = ref([])
os.cpus().then(data => cpus.value = data)
</script>

<template>
  <Card>
    <template #header>
      CPUs
    </template>
    <template #content>
      <ul>
        <li v-for="(item, index) in cpus">
          <span>Core {{ index + 1 }}:</span>
          {{ item.model }}
        </li>
      </ul>
    </template>
  </Card>
</template>