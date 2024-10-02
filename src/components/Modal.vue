<script setup lang="ts">

type Props = { closeModal: () => void }

const props = defineProps<Props>()
</script>

<template>
  <div class="fixed z-50 inset-0 flex items-center justify-center px-3">
    <div @click="closeModal" class="absolute inset-0 bg-black opacity-20 -z-10"></div>
    <slot/>
  </div>
</template>

<style scoped>

</style>