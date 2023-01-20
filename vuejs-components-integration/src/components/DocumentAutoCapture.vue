<script setup lang="ts">
import { ref } from "vue";
import type { DocumentComponentData } from "@innovatrics/dot-document-auto-capture";
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-document-auto-capture/events";
import { Step } from "../types";
import DocumentCamera from "./DocumentCamera.vue";
import DocumentUi from "./DocumentUi.vue";

const emit = defineEmits<{
  (e: "onPhotoTaken", image: Blob, data: DocumentComponentData): void;
  (e: "onError", error: Error): void;
  (e: "onBack", step: Step): void;
}>();

const isButtonDisabled = ref(true);

const handlePhotoTaken = (image: Blob, data: DocumentComponentData) => {
  isButtonDisabled.value = false;
  emit("onPhotoTaken", image, data);
};

const handleContinueDetection = () => {
  dispatchControlEvent(
    DocumentCustomEvent.CONTROL,
    ControlEventInstruction.CONTINUE_DETECTION
  );
  isButtonDisabled.value = true;
};

const handleError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <h2>Document auto capture</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button
      :disabled="isButtonDisabled"
      @click="handleContinueDetection"
      class="button"
    >
      Continue detection
    </button>
    <div class="container">
      <DocumentCamera
        :cameraOptions="{
          imageType: 'png',
          cameraFacing: 'environment',
          onPhotoTaken: handlePhotoTaken,
          onError: handleError,
        }"
      />
      <DocumentUi :uiProps="{showCameraButtons: true}" />
    </div>
  </div>
</template>
