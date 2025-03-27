<script setup lang="ts">
import { ref } from "vue";
import type { PalmCallback } from "@innovatrics/dot-palm-capture";
import {
  dispatchControlEvent,
  PalmCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-palm-capture/events";
import { Step, Emits } from "../types";
import PalmCamera from "./PalmCamera.vue";
import PalmUi from "./PalmUi.vue";


const emit = defineEmits<Emits<PalmCallback>>();

const isButtonDisabled = ref(true);

const handlePhotoTaken: PalmCallback = async (imageData, content) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
};

const handleContinueDetection = () => {
  dispatchControlEvent(
    PalmCustomEvent.CONTROL,
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
    <h2>Palm auto capture</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container">
      <PalmCamera :cameraOptions="{
        cameraFacing: 'environment',
        onPhotoTaken: handlePhotoTaken,
        onError: handleError,
      }" />
      <PalmUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
