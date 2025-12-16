<script setup lang="ts">
import type { DocumentConfiguration } from "@innovatrics/dot-document-auto-capture";
import "@innovatrics/dot-document-auto-capture";

type Props = {
  configuration: DocumentConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-document-auto-capture .configuration="props.configuration" id="x-dot-document-auto-capture" />
</template>
