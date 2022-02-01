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
import { FaceComponentData } from "../types";
import "@innovatrics/dot-face-auto-capture";

export default defineComponent({
  name: "FaceAutoCapture",
  computed: {
    faceAutoCapture: function () {
      return {
        cameraOptions: {
          imageType: "png",
          cameraFacing: "environment",
          photoTakenCb: (image: Blob, data: FaceComponentData) =>
            this.$emit("photoTakenCallBack", image, data),
        },
      };
    },
  },
});
</script>