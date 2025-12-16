<script setup lang="ts">
import type { Configuration } from "@innovatrics/dot-smile-liveness";
import "@innovatrics/dot-smile-liveness";

type Props = {
  configuration: Configuration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-smile-liveness .configuration="props.configuration" id="x-dot-smile-liveness" />
</template>
