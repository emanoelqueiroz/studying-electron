<script setup>
import Card from './Card/Index.vue'

const nodeVersion = versions.node()
const chromeVersion = versions.chrome()
const electronVersion = versions.electron()
</script>

<template>
  <Card>
    <template #header>
      Versions
    </template>
    <template #content>
      <ul>
        <li>
          <span>Node:</span>
          {{ nodeVersion }}
        </li>
        <li>
          <span>Chrome:</span>
          {{ chromeVersion }}
        </li>
        <li>
          <span>Electron:</span>
          {{ electronVersion }}
        </li>
      </ul>
    </template>
  </Card>
</template>