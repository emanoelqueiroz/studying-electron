<script setup>
import CardHeader from './CardHeader.vue'
import CardContent from './CardContent.vue'
</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <CardHeader>
        <slot name="header"></slot>
      </CardHeader>
      <CardContent>
        <slot name="content"></slot>
      </CardContent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  height: 100%;
}
</style>