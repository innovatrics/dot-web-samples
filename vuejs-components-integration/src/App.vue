<script setup lang="ts">
import { ref } from "vue";
import DocumentAutoCapture from "./components/DocumentAutoCapture.vue";
import FaceAutoCapture from "./components/FaceAutoCapture.vue";
import ResultStep from "./components/ResultStep.vue";
import ComponentSelect from "./components/ComponentSelect.vue";
import { Step } from "./types";
import MagnifEyeLiveness from "./components/MagnifEyeLiveness.vue";
import SmileLiveness from "./components/SmileLiveness.vue"
import { CallbackImage } from "@innovatrics/dot-document-auto-capture";
import MultiRangeLiveness from "./components/MultiRangeLiveness.vue";
import PalmCapture from "./components/PalmCapture.vue";
import { OnCompleteCallbackImages as SmileLivenessOnCompleteCallbackImages } from '@innovatrics/dot-smile-liveness';
import { OnCompleteCallbackImage as MultiRangeLivenessOnCompleteCallbackImage } from '@innovatrics/dot-multi-range-liveness';

const currentStep = ref(Step.SELECT_COMPONENT);
const imageUrl = ref("");

function handlePhotoTaken<T>(imageData: CallbackImage<T>, _content: Uint8Array) {
  imageUrl.value = URL.createObjectURL(imageData.image);
}

function handleSmilePhotoTaken(imageData: SmileLivenessOnCompleteCallbackImages, _content: Uint8Array) {
    const { smilePhaseImageWithMetadata } = imageData;
  imageUrl.value = URL.createObjectURL(smilePhaseImageWithMetadata.image);
}

function handleMultiRangePhotoTaken(imageData: MultiRangeLivenessOnCompleteCallbackImage, _content: Uint8Array) {
  imageUrl.value = URL.createObjectURL(imageData.imageWithMetadata.image);
}

function handleError(error: Error) {
  alert(error);
}

function handleStepChange(step: Step) {
  currentStep.value = step;
  imageUrl.value = "";
}
</script>

<template>
  <div>
    <h1>DOT Web Components Integration</h1>
    <div v-if="currentStep === Step.DOCUMENT_CAPTURE">
      <DocumentAutoCapture @on-complete="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <div v-else-if="currentStep === Step.FACE_CAPTURE">
      <FaceAutoCapture @on-complete="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <div v-else-if="currentStep === Step.PALM_CAPTURE">
      <PalmCapture @on-complete="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <div v-else-if="currentStep === Step.MAGNIFEYE_CAPTURE">
      <MagnifEyeLiveness @on-complete="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <div v-else-if="currentStep === Step.SMILE_CAPTURE">
      <SmileLiveness @on-complete="handleSmilePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <div v-else-if="currentStep === Step.MULTIRANGE_CAPTURE">
      <MultiRangeLiveness @on-complete="handleMultiRangePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
      <ResultStep v-if="imageUrl" :imageSrc="imageUrl" />
    </div>
    <ComponentSelect v-else @onClick="handleStepChange" />
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  line-height: 1.5;
  color: #404354;
  text-align: center;
}

.container {
  max-width: 50rem;
  margin: 1rem auto;
  position: relative;
}

.container.overflow-hidden {
  overflow: hidden;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375em;
  padding: 0.625em 1em;
  background: #00bfb2;
  color: white;
  border: 0;
  box-shadow: 0px 0.375rem 0.625rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
}

.button[disabled] {
  background-color: lightgrey;
  color: gray;
  cursor: not-allowed;
}
</style>
