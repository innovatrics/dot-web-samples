<script setup lang="ts">
import { ref } from "vue";
import type { PalmOnCompleteCallback, PalmOnCompleteCallbackImage } from "@innovatrics/dot-palm-capture";
import {
  dispatchControlEvent,
  PalmCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-palm-capture/events";
import { Step, Emits } from "../types";
import PalmCamera from "./PalmCamera.vue";
import PalmUi from "./PalmUi.vue";


const emit = defineEmits<Emits<PalmOnCompleteCallback>>();

const isButtonDisabled = ref(true);

function handlePhotoTaken(imageData: PalmOnCompleteCallbackImage, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    PalmCustomEvent.CONTROL,
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
    <h2>Palm auto capture</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container">
      <PalmCamera :configuration="{
        camera: { facingMode: 'environment' },
        onComplete: handlePhotoTaken,
        onError: handleError,
      }" />
      <PalmUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
