<template>
  <div>
    <h1>DOT components integration</h1>
    <document-auto-capture
      v-if="currentStep === step.DOCUMENT_CAPTURE"
      @photoTakenCallBack="handlePhotoTaken"
    />
    <face-auto-capture
      v-else-if="currentStep === step.FACE_CAPTURE"
      @photoTakenCallBack="handlePhotoTaken"
    />
    <result
      v-else-if="currentStep === step.RESULT"
      @onBack="handleStepChange"
      :imageSrc="this.imageUrl"
    />
    <component-select v-else @onClick="handleStepChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Step, DocumentComponentData, FaceComponentData } from "./types";
import DocumentAutoCapture from "./components/DocumentAutoCapture.vue";
import FaceAutoCapture from "./components/FaceAutoCapture.vue";
import Result from "./components/Result.vue";
import ComponentSelect from "./components/ComponentSelect.vue";

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
    },
    handlePhotoTaken(
      image: Blob,
      data: DocumentComponentData | FaceComponentData
    ) {
      console.log("Data: ", data);
      this.imageUrl = URL.createObjectURL(image);
      this.currentStep = Step.RESULT;
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
  width: 50rem;
  height: 25rem;
  margin: 0 auto;
}
.select-component-btn {
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
</style>
