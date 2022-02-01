<template>
  <div>
    <h2>Document auto capture</h2>
    <div class="container">
      <x-dot-document-auto-capture v-bind="documentAutoCapture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DocumentComponentData } from "../types";
import "@innovatrics/dot-document-auto-capture";

export default defineComponent({
  name: "DocumentAutoCapture",
  computed: {
    documentAutoCapture: function () {
      return {
        cameraOptions: {
          imageType: "png",
          cameraFacing: "environment",
          photoTakenCb: (image: Blob, data: DocumentComponentData) =>
            this.$emit("photoTakenCallBack", image, data),
        },
      };
    },
  },
});
</script>
