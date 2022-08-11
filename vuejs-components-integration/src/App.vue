<template>
  <div>
    <h1>DOT components integration</h1>
    <div v-if="currentStep === step.DOCUMENT_CAPTURE">
      <document-auto-capture
        @photoTakenCallBack="handlePhotoTaken"
        @onError="handleError"
        @onBack="handleStepChange"
      />
      <result v-if="this.imageUrl" :imageSrc="this.imageUrl" />
    </div>
    <div v-else-if="currentStep === step.FACE_CAPTURE">
      <face-auto-capture
        @photoTakenCallBack="handlePhotoTaken"
        @onError="handleError"
        @onBack="handleStepChange"
      />
      <result v-if="this.imageUrl" :imageSrc="this.imageUrl" />
    </div>
    <component-select v-else @onClick="handleStepChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocumentAutoCapture from "./components/DocumentAutoCapture.vue";
import FaceAutoCapture from "./components/FaceAutoCapture.vue";
import Result from "./components/Result.vue";
import ComponentSelect from "./components/ComponentSelect.vue";
import { Step } from "./types";
import type { FaceComponentData } from "@innovatrics/dot-face-auto-capture";
import type { DocumentComponentData } from "@innovatrics/dot-document-auto-capture";

export default defineComponent({
  name: "App",
  components: {
    DocumentAutoCapture,
    FaceAutoCapture,
    Result,
    ComponentSelect,
  },
  data() {
    return {
      currentStep: Step.SELECT_COMPONENT,
      step: Step,
      imageUrl: "",
    };
  },
  methods: {
    handleStepChange(step: Step) {
      this.currentStep = step;
      this.imageUrl = "";
    },
    handlePhotoTaken(
      image: Blob,
      data: DocumentComponentData | FaceComponentData
    ) {
      console.log("Data: ", data);
      this.imageUrl = URL.createObjectURL(image);
    },
    handleError(error: Error) {
      alert(error);
    },
  },
});
</script>

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
  margin: 20px auto;
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
