<script setup lang="ts">
import { Step } from "../types";

const emit = defineEmits<{
  (e: "onClick", step: Step): void;
}>();
</script>

<template>
  <div>
    <button class="button" @click="emit('onClick', Step.FACE_CAPTURE)">
      Face
    </button>
    <button class="button" @click="emit('onClick', Step.DOCUMENT_CAPTURE)">
      Document
    </button>
    <button class="button" @click="emit('onClick', Step.PALM_CAPTURE)">
      Palm
    </button>
    <button class="button" @click="emit('onClick', Step.MAGNIFEYE_CAPTURE)">
      MagnifEye Liveness
    </button>
    <button class="button" @click="emit('onClick', Step.SMILE_CAPTURE)">
      Smile Liveness
    </button>
    <button class="button" @click="emit('onClick', Step.MULTIRANGE_CAPTURE)">
      MultiRange Liveness
    </button>
  </div>
</template>
