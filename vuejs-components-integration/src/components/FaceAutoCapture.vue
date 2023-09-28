<script setup lang="ts">
import { ref } from "vue";
import type { FaceCallback } from "@innovatrics/dot-face-auto-capture";
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-face-auto-capture/events";
import { Step, Emits } from "../types";
import FaceCamera from "./FaceCamera.vue";
import FaceUi from "./FaceUi.vue";

const emit = defineEmits<Emits<FaceCallback>>();

const isButtonDisabled = ref(true);

const handlePhotoTaken: FaceCallback = async (imageData, content) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
};

const handleContinueDetection = () => {
  dispatchControlEvent(
    FaceCustomEvent.CONTROL,
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
    <h2>Face auto capture</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container">
      <FaceCamera :cameraOptions="{
        cameraFacing: 'user',
        onPhotoTaken: handlePhotoTaken,
        onError: handleError,
      }" />
      <FaceUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
