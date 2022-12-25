<script setup>
import { ref, computed } from 'vue'

import Card from './Card/Index.vue'
import MemoryUsageGraph from './MemoryUsageGraph.vue'

let obj = ref({
  freemem: 0,
  totalmem: 0,
})

const freeMem = computed(() => convertsToGb(obj.value.freemem))
const totalMem = computed(() => convertsToGb(obj.value.totalmem))
const usedMem = computed(() => convertsToGb(obj.value.totalmem - obj.value.freemem))

const freeMemFormated = computed(() => fixValue(freeMem.value / 1024))
const totalMemFormated = computed(() => fixValue(totalMem.value / 1024))
const usedMemFormated = computed(() => fixValue(usedMem.value / 1024))

function convertsToGb(value) {
  return (value / 1024) / 1024
}

function fixValue(value) {
  return value.toFixed(2).replace('.', ',')
}

const getMemoryInfo = () => {
  os.memory().then(data => {
    obj.value = data
  })
}

getMemoryInfo();
setInterval(() => getMemoryInfo(), 1000)
</script>

<template>
  <Card>
    <template #header>
      Memory Usage
    </template>
    <template #content>
      <ul>
        <li>
          <span>Used Memory:</span>
          {{ usedMemFormated }} GB
        </li>
        <li>
          <span>Free Memory:</span>
          {{ freeMemFormated }} GB of {{ totalMemFormated }} GB
        </li>
      </ul>
      <!-- <MemoryUsageGraph :used="usedMem" :free="freeMem" :total="totalMem" /> -->
    </template>
  </Card>
</template>