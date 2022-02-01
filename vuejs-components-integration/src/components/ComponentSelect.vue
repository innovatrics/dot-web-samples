<template>
  <div>
    <button class="select-component-btn" @click="onDocumentClick()">
      Document
    </button>
    <button class="select-component-btn" @click="onFaceClick()">Face</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Step } from "../types";

export default defineComponent({
  name: "ComponentSelect",
  methods: {
    onDocumentClick() {
      this.$emit("onClick", Step.DOCUMENT_CAPTURE);
    },
    onFaceClick() {
      this.$emit("onClick", Step.FACE_CAPTURE);
    },
  },
});
</script>
