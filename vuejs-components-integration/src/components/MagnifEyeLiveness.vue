<script setup lang="ts">
import { ref } from "vue";
import { Step, Emits } from "../types";
import MagnifEyeLivenessCamera from "./MagnifEyeLivenessCamera.vue";
import MagnifEyeLivenessUi from "./MagnifEyeLivenessUi.vue";
import { MagnifEyeLivenessOnCompleteCallback, MagnifEyeLivenessOnCompleteCallbackImage } from "@innovatrics/dot-magnifeye-liveness";
import {
  dispatchControlEvent,
  MagnifEyeCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-magnifeye-liveness/events";

const emit = defineEmits<Emits<MagnifEyeLivenessOnCompleteCallback>>();

const isButtonDisabled = ref(true);

/**
 * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
 * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
 */
function onComplete(imageData: MagnifEyeLivenessOnCompleteCallbackImage, content: Uint8Array) {
  isButtonDisabled.value = false;
  emit("onComplete", imageData, content);
}

function handleContinueDetection() {
  dispatchControlEvent(
    MagnifEyeCustomEvent.CONTROL,
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
    <h2>MagnifEye Liveness</h2>
    <button @click="emit('onBack', Step.SELECT_COMPONENT)" class="button">
      Go back
    </button>
    <button :disabled="isButtonDisabled" @click="handleContinueDetection" class="button">
      Continue detection
    </button>
    <div class="container overflow-hidden">
      <MagnifEyeLivenessCamera :configuration="{
        onComplete: onComplete,
        onError: onError,
      }" />
      <MagnifEyeLivenessUi :configuration="{ control: { showCameraButtons: true } }" />
    </div>
  </div>
</template>
