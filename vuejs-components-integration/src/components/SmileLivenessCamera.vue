<script setup lang="ts">
import type { SmileLivenessProps } from "@innovatrics/dot-smile-liveness";
import "@innovatrics/dot-smile-liveness";

type Props = {
  cameraOptions: SmileLivenessProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-smile-liveness .props="props.cameraOptions" id="x-dot-smile-liveness" />
</template>
