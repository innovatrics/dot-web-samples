<script setup lang="ts">
import type { DocumentCameraProps } from "@innovatrics/dot-document-auto-capture";
import "@innovatrics/dot-document-auto-capture";

type Props = {
  cameraOptions: DocumentCameraProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-document-auto-capture .cameraOptions="props.cameraOptions" />
</template>
