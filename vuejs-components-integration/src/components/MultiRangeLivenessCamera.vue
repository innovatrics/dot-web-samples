<script setup lang="ts">
import type { Configuration } from '@innovatrics/dot-multi-range-liveness';
import '@innovatrics/dot-multi-range-liveness';

type Props = {
  configuration: Configuration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-multi-range-liveness .configuration="props.configuration" id="x-dot-multi-range-liveness" />
</template>
