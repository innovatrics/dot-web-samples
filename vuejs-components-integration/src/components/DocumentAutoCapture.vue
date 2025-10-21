<script setup lang="ts">
import { ref } from "vue";
import type { DocumentCallback } from "@innovatrics/dot-document-auto-capture";
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-document-auto-capture/events";
import { Step, Emits } from "../types";
import DocumentCamera from "./DocumentCamera.vue";
import DocumentUi from "./DocumentUi.vue";


const emit = defineEmits<Emits<DocumentCallback>>();

const isButtonDisabled = ref(true);

const handlePhotoTaken: DocumentCallback = async (imageData, content) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
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
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container overflow-hidden">
      <DocumentCamera :cameraOptions="{
        cameraFacing: 'environment',
        onPhotoTaken: handlePhotoTaken,
        onError: handleError,
      }" />
      <DocumentUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
