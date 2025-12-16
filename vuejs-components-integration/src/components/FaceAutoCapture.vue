<script setup lang="ts">
import { ref } from "vue";
import type { FaceOnCompleteCallback, FaceOnCompleteCallbackImage } from "@innovatrics/dot-face-auto-capture";
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-face-auto-capture/events";
import { Step, Emits } from "../types";
import FaceCamera from "./FaceCamera.vue";
import FaceUi from "./FaceUi.vue";

const emit = defineEmits<Emits<FaceOnCompleteCallback>>();

const isButtonDisabled = ref(true);

function handlePhotoTaken(imageData: FaceOnCompleteCallbackImage, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    FaceCustomEvent.CONTROL,
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
    <h2>Face auto capture</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container overflow-hidden">
      <FaceCamera :configuration="{
        camera: { facingMode: 'user' },
        onComplete: handlePhotoTaken,
        onError: handleError,
      }" />
      <FaceUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
