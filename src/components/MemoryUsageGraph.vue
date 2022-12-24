<script setup>
import { watch, onMounted } from 'vue'

const props = defineProps({
  used: Number,
  free: Number,
  total: Number,
})

onMounted(() => {
  const canvas = document.getElementById('graph')
  const ctx = canvas.getContext('2d')

  const arr = [{
    x: 0,
    y: 0,
    vx: 15,
    vy: 0,
    radius: 25,
    value: 0,
    color: 'purple',
    draw() {
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.beginPath()
      ctx.fillRect(this.x, canvas.height, this.vx, -this.value)
      ctx.closePath()
    }
  }]

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    arr.forEach(item => item.draw())

    const lastBar = arr.at(-1)

    if (lastBar.x + lastBar.vx > canvas.width) {
      arr.shift();

      arr.forEach(item => item.x -= item.vx)
    }

    const newBar = { ...lastBar }
    newBar.x += newBar.vx
    newBar.y += newBar.vy
    newBar.value = (props.used / props.total) * 100

    arr.push(newBar)
  }

  watch(props, () => window.requestAnimationFrame(draw))
})

</script>

<template>
  <canvas id="graph"></canvas>
</template>