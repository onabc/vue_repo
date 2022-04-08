<script lang="ts" setup>
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<template>
    <h1>测试</h1>
    <h3>Mouse: {{ x }} -- {{ y }}</h3>
</template>

<style lang="scss" scoped>
h1 {
    color: $color;
}
</style>
