<script setup lang="ts">
import { ref } from "vue";
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-document-auto-capture/events";
import { Step, Emits } from "../types";
import DocumentCamera from "./DocumentCamera.vue";
import DocumentUi from "./DocumentUi.vue";
import { DocumentOnCompleteCallback, DocumentOnCompleteCallbackImage } from '@innovatrics/dot-document-auto-capture';


const emit = defineEmits<Emits<DocumentOnCompleteCallback>>();

const isButtonDisabled = ref(true);

function handlePhotoTaken(imageData: DocumentOnCompleteCallbackImage, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    DocumentCustomEvent.CONTROL,
    ControlEventInstruction.CONTINUE_DETECTION
  );
  isButtonDisabled.value = true;
}

function handleError(error: Error) {
  emit("onError", error);
}
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
      <DocumentCamera :configuration="{
        camera: { facingMode: 'environment' },
        onComplete: handlePhotoTaken,
        onError: handleError,
      }" />
      <DocumentUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
