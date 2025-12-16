<script setup lang="ts">
import type { DocumentUiConfiguration } from "@innovatrics/dot-auto-capture-ui/document";
import "@innovatrics/dot-auto-capture-ui/document";

type Props = {
  configuration: DocumentUiConfiguration;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-document-auto-capture-ui .configuration="props.configuration" id="x-dot-document-auto-capture-ui"/>
</template>
