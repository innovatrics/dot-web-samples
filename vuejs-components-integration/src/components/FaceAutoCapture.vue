<template>
  <div>
    <h2>Face auto capture</h2>
    <button @click="onBackClick()" class="button">Go back</button>
    <button
      :disabled="isButtonDisabled"
      @click="handleContinueDetection()"
      class="button"
    >
      Continue detection
    </button>
    <div class="container">
      <x-dot-face-auto-capture v-bind="faceAutoCapture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@innovatrics/dot-face-auto-capture";
import { FaceCameraProps, FaceComponentData } from "@innovatrics/auto-capture";
import { Step } from "../types";

interface FaceCameraOptions {
  cameraOptions: FaceCameraProps;
}

export default defineComponent({
  name: "FaceAutoCapture",
  data() {
    return {
      isButtonDisabled: true,
    };
  },
  computed: {
    faceAutoCapture: function (): FaceCameraOptions {
      return {
        cameraOptions: {
          imageType: "png",
          cameraFacing: "environment",
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
    handlePhotoTaken(image: Blob, data: FaceComponentData) {
      this.isButtonDisabled = false;
      this.$emit("photoTakenCallBack", image, data);
    },
    handleContinueDetection() {
      document.dispatchEvent(
        new CustomEvent("face-auto-capture", {
          detail: { instruction: "continue-detection" },
        })
      );

      this.isButtonDisabled = true;
    },
  },
});
</script>