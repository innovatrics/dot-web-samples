<script setup lang="ts">
import type { DocumentUiProps } from "@innovatrics/dot-auto-capture-ui/document";
import "@innovatrics/dot-auto-capture-ui/document";

type Props = {
  uiProps: DocumentUiProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-document-auto-capture-ui .props="props.uiProps" id="x-dot-document-auto-capture-ui"/>
</template>
