<script setup lang="ts">
import type { MagnifEyeLivenessUiConfiguration } from "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";
import "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";

type Props = {
  configuration: MagnifEyeLivenessUiConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-magnifeye-liveness-ui .configuration="props.configuration" id="x-dot-magnifeye-liveness-ui" />
</template>
