<script setup lang="ts">
import type { FaceConfiguration } from "@innovatrics/dot-face-auto-capture";
import "@innovatrics/dot-face-auto-capture";

type Props = {
  configuration: FaceConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-face-auto-capture .configuration="props.configuration" id="x-dot-face-auto-capture" />
</template>
