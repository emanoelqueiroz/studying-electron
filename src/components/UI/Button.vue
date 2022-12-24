<script setup>
defineProps({ type: String })
</script>

<template>
  <button :type="type" class="btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  padding: 8px;
  border-radius: 3px;
  color: #fff;
  border: 0;
  background-color: rgba(0, 0, 0, 0.3);
  font-weight: 600;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>