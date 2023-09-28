<script setup lang="ts">
import { ref } from "vue";
import { Step, Emits } from "../types";
import SmileLivenessCamera from "./SmileLivenessCamera.vue";
import SmileLivenessUi from "./SmileLivenessUi.vue";
import { SmileLivenessCallback } from "@innovatrics/dot-smile-liveness";

const emit = defineEmits<Emits<SmileLivenessCallback>>();
const isButtonDisabled = ref(true);

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the Smile liveness score.
 */
const onComplete: SmileLivenessCallback = (imageData, content) => {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
};

const onError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <h2>Smile Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <div class="container overflow-hidden">
      <SmileLivenessCamera :cameraOptions="{
        onComplete: onComplete,
        onError: onError,
      }" />
      <SmileLivenessUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
