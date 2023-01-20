<script setup lang="ts">
type Props = {
  imageSrc: string;
};
const props = defineProps<Props>();
</script>

<style scoped>
.result-img {
  width: 100%;
}
</style>

<template>
  <div>
    <div class="container">
      <img :src="props.imageSrc" alt="result-picture" class="result-img" />
    </div>
  </div>
</template>
