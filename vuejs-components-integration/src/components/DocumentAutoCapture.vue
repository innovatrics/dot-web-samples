<template>
  <div>
    <h2>Document auto capture</h2>
    <button @click="onBackClick()" class="button">Go back</button>
    <button
      :disabled="isButtonDisabled"
      @click="handleContinueDetection()"
      class="button"
    >
      Continue detection
    </button>
    <div class="container">
      <x-dot-document-auto-capture v-bind="documentAutoCapture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@innovatrics/dot-document-auto-capture";
import {
  DocumentCameraProps,
  DocumentComponentData,
} from "@innovatrics/auto-capture";
import { Step } from "../types";

interface DocumentCameraOptions {
  cameraOptions: DocumentCameraProps;
}

export default defineComponent({
  name: "DocumentAutoCapture",
  data() {
    return {
      isButtonDisabled: true,
    };
  },
  computed: {
    documentAutoCapture: function (): DocumentCameraOptions {
      return {
        cameraOptions: {
          imageType: "png",
          cameraFacing: "environment",
          detectionLayerVisible: true,
          photoTakenCb: this.handlePhotoTaken,
          onError: (error: Error) => this.$emit("onError", error),
        },
      };
    },
  },
  methods: {
    onBackClick() {
      this.$emit("onBack", Step.SELECT_COMPONENT);
    },
    handlePhotoTaken(image: Blob, data: DocumentComponentData) {
      this.isButtonDisabled = false;
      this.$emit("photoTakenCallBack", image, data);
    },
    handleContinueDetection() {
      document.dispatchEvent(
        new CustomEvent("document-auto-capture", {
          detail: { instruction: "continue-detection" },
        })
      );

      this.isButtonDisabled = true;
    },
  },
});
</script>
