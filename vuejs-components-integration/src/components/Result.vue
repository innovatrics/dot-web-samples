<template>
  <div>
    <div class="container">
      <img :src="imageSrc" alt="result-picture" class="result-img" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Result",
  props: {
    imageSrc: String,
  },
});
</script>

<style scoped>
.result-img {
  width: 100%;
}
</style>