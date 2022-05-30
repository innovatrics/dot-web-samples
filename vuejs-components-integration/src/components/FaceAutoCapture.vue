<template>
  <div>
    <h2>Face auto capture</h2>
    <div class="container">
      <x-dot-face-auto-capture v-bind="faceAutoCapture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@innovatrics/dot-face-auto-capture";
import { FaceCameraProps, FaceComponentData } from "@innovatrics/auto-capture";

interface FaceCameraOptions {
  cameraOptions: FaceCameraProps;
}

export default defineComponent({
  name: "FaceAutoCapture",
  computed: {
    faceAutoCapture: function (): FaceCameraOptions {
      return {
        cameraOptions: {
          imageType: "png",
          cameraFacing: "environment",
          photoTakenCb: (image: Blob, data: FaceComponentData) =>
            this.$emit("photoTakenCallBack", image, data),
          onError: (error: Error) =>
            this.$emit("onError", error),
        },
      };
    },
  },
});
</script>