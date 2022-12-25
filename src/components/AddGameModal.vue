<script setup>
import { ref } from 'vue'

import Button from './UI/Button.vue'

const emit = defineEmits(['closeModal'])

let name = ref('')
let path = ref('')
let imgSrc = ref('')

function execFilePath(event) {
  const file = event.target.files[0]
  path.value = file.path
}

function imgFilePath(event) {
  const file = event.target.files[0]
  imgSrc.value = file.path
}

function addGame(event) {
  event.preventDefault()
  os.saveGames({
    name: name.value,
    path: path.value,
    imgSrc: imgSrc.imgSrc,
  });
  emit('closeModal')
}

// TODO components to inputs and input files, maybe for modal too
</script>

<template>
  <div class="modal-backdrop" @click.self="$emit('closeModal')">
    <form class="modal" @submit="addGame">
      <div class="input-group">
        <label>Name</label>
        <input type="text" v-model="name">
      </div>
      <div class="input-group">
        <label>Path</label>
        <input type="file" @change="execFilePath">
      </div>
      <div class="input-group">
        <label>Image</label>
        <input type="file" @change="imgFilePath">
      </div>
      <Button>Save</Button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 90%;
  margin: auto;
  padding: 21px;
  border-radius: 3px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  input {
    color: #fff;
    border: 0;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
    padding: 8px;

    &:focus {
      outline: 0;
    }
  }
}
</style>
