<script setup lang="ts">
import type { MultiRangeUiConfiguration } from "@innovatrics/dot-auto-capture-ui/multi-range-liveness";
import '@innovatrics/dot-auto-capture-ui/multi-range-liveness';


type Props = {
  configuration: MultiRangeUiConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-multi-range-liveness-ui .configuration="props.configuration" id="x-dot-multi-range-liveness-ui" />
</template>
