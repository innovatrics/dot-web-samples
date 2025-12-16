<script setup lang="ts">
import { ref } from "vue";
import { Step, Emits } from "../types";
import MultiRangeLivenessCamera from "./MultiRangeLivenessCamera.vue";
import MultiRangeLivenessUi from "./MultiRangeLivenessUi.vue";
import { OnCompleteCallback, OnCompleteCallbackImage } from "@innovatrics/dot-multi-range-liveness";
import {
  ControlEventInstruction,
  dispatchControlEvent,
  MultiRangeCustomEvent,
} from '@innovatrics/dot-multi-range-liveness/events';

const emit = defineEmits<Emits<OnCompleteCallback>>();

const isButtonDisabled = ref(true);

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the MultiRange liveness score.
 * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_multirange_liveness_check
 */
function onComplete(imageData: OnCompleteCallbackImage, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    MultiRangeCustomEvent.CONTROL,
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
    <h2>MultiRange Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container overflow-hidden">
      <MultiRangeLivenessCamera :configuration="{
        challengeSequence: ['ONE', 'THREE', 'FIVE', 'ZERO'],
        onComplete: onComplete,
        onError: onError,
      }" />
      <MultiRangeLivenessUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
