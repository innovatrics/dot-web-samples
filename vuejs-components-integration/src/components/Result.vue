<template>
  <div>
    <div class="container">
      <button @click="onBackClick()" class="select-component-btn">
        Go back
      </button>
      <img :src="imageSrc" alt="result-picture" class="result-img" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Step } from "../types";

export default defineComponent({
  name: "Result",
  props: {
    imageSrc: String,
  },
  methods: {
    onBackClick() {
      this.$emit("onBack", Step.SELECT_COMPONENT);
    },
  },
});
</script>

<style scoped>
.result-img {
  width: 100%;
}
</style>