<script setup lang="ts">
import type { FaceUiConfiguration } from "@innovatrics/dot-auto-capture-ui/face";
import "@innovatrics/dot-auto-capture-ui/face";

type Props = {
  configuration: FaceUiConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-face-auto-capture-ui .configuration="props.configuration" id="x-dot-face-auto-capture-ui" />
</template>
