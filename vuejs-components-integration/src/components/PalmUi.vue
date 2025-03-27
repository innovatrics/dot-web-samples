<script setup lang="ts">
import type { PalmUiProps } from "@innovatrics/dot-auto-capture-ui/palm";
import "@innovatrics/dot-auto-capture-ui/palm";

type Props = {
  uiProps: PalmUiProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-palm-capture-ui .props="props.uiProps" id="x-dot-palm-capture-ui"/>
</template>
