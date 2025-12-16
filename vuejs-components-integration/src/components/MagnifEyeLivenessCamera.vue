<script setup lang="ts">
import type { MagnifEyeLivenessConfiguration } from "@innovatrics/dot-magnifeye-liveness";
import "@innovatrics/dot-magnifeye-liveness";

type Props = {
  configuration: MagnifEyeLivenessConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-magnifeye-liveness .configuration="props.configuration" id="x-dot-magnifeye-liveness" />
</template>
