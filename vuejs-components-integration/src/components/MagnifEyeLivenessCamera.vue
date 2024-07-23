<script setup lang="ts">
import type { MagnifEyeLivenessProps } from "@innovatrics/dot-magnifeye-liveness";
import "@innovatrics/dot-magnifeye-liveness";

type Props = {
  cameraOptions: MagnifEyeLivenessProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-magnifeye-liveness .props="props.cameraOptions" id="x-dot-magnifeye-liveness" />
</template>
