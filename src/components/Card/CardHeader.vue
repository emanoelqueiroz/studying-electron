<script setup></script>

<template>
  <div class="card-header">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .card-header {
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    font-weight: 600;
    padding: 13px;
    padding-bottom: 0;
  }
</style>