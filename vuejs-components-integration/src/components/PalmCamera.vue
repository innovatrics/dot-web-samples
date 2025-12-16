<script setup lang="ts">
import type { PalmConfiguration } from "@innovatrics/dot-palm-capture";
import "@innovatrics/dot-palm-capture";

type Props = {
  configuration: PalmConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-palm-capture .configuration="props.configuration" id="x-dot-palm-capture" />
</template>
