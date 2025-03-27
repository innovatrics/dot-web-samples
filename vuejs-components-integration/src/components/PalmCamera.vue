<script setup lang="ts">
import type { PalmCameraProps } from "@innovatrics/dot-palm-capture";
import "@innovatrics/dot-palm-capture";

type Props = {
  cameraOptions: PalmCameraProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-palm-capture .cameraOptions="props.cameraOptions" id="x-dot-palm-capture" />
</template>
