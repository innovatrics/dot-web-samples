<template>
  <div>
    <h2>Document auto capture</h2>
    <div class="container">
      <x-dot-document-auto-capture v-bind="documentAutoCapture" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@innovatrics/dot-document-auto-capture';
import { DocumentCameraProps, DocumentComponentData } from '@innovatrics/auto-capture';

interface DocumentCameraOptions {
  cameraOptions: DocumentCameraProps;
}

export default defineComponent({
  name: 'DocumentAutoCapture',
  computed: {
    documentAutoCapture: function (): DocumentCameraOptions {
      return {
        cameraOptions: {
          imageType: 'png',
          cameraFacing: 'environment',
          detectionLayerVisible: true,
          photoTakenCb: (image: Blob, data: DocumentComponentData) =>
            this.$emit('photoTakenCallBack', image, data),
          onError: (error: Error) =>
            this.$emit('onError', error),
        },
      };
    },
  },
});
</script>
