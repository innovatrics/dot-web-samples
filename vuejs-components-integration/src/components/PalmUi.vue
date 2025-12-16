<script setup lang="ts">
import type { PalmUiConfiguration } from "@innovatrics/dot-auto-capture-ui/palm";
import "@innovatrics/dot-auto-capture-ui/palm";

type Props = {
  configuration: PalmUiConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-palm-capture-ui .configuration="props.configuration" id="x-dot-palm-capture-ui"/>
</template>
