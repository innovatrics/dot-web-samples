<script setup lang="ts">
import { ref } from "vue";
import { Step, Emits } from "../types";
import SmileLivenessCamera from "./SmileLivenessCamera.vue";
import SmileLivenessUi from "./SmileLivenessUi.vue";
import { OnCompleteCallback, OnCompleteCallbackImages } from "@innovatrics/dot-smile-liveness";
import {
  dispatchControlEvent,
  SmileCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-smile-liveness/events";

const emit = defineEmits<Emits<OnCompleteCallback>>();
const isButtonDisabled = ref(true);

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the Smile liveness score.
 */
function onComplete(imageData: OnCompleteCallbackImages, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    SmileCustomEvent.CONTROL,
    ControlEventInstruction.CONTINUE_DETECTION
  );
  isButtonDisabled.value = true;
}

function onError(error: Error) {
  emit("onError", error);
}
</script>

<template>
  <div>
    <h2>Smile Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container overflow-hidden">
      <SmileLivenessCamera :configuration="{
        onComplete: onComplete,
        onError: onError,
      }" />
      <SmileLivenessUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
