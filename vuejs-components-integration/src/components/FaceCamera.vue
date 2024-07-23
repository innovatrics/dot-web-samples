<script setup lang="ts">
import type { FaceCameraProps } from "@innovatrics/dot-face-auto-capture";
import "@innovatrics/dot-face-auto-capture";

type Props = {
  cameraOptions: FaceCameraProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-face-auto-capture .cameraOptions="props.cameraOptions" id="x-dot-face-auto-capture" />
</template>
