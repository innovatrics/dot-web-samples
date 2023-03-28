<script setup lang="ts">
import { ref } from "vue";
import { Step } from "../types";
import MagnifEyeLivenessCamera from "./MagnifEyeLivenessCamera.vue";
import MagnifEyeLivenessUi from "./MagnifEyeLivenessUi.vue";
import { OnCompleteData } from "@innovatrics/dot-magnifeye-liveness";
import { FaceComponentData } from "@innovatrics/dot-face-auto-capture/.";

const emit = defineEmits<{
  (e: "onComplete", image: Blob, data: Partial<FaceComponentData>): void;
  (e: "onError", error: Error): void;
  (e: "onBack", step: Step): void;
}>();

const isButtonDisabled = ref(true);

const onComplete = (imageData: OnCompleteData) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData.image, imageData.data);
};

const onError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <h2>MagnifEye Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <div class="container overflow-hidden">
      <MagnifEyeLivenessCamera :cameraOptions="{
        onComplete: onComplete,
        onError: onError,
      }" />
      <MagnifEyeLivenessUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
