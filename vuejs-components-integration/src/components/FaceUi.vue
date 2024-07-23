<script setup lang="ts">
import type { FaceUiProps } from "@innovatrics/dot-auto-capture-ui/face";
import "@innovatrics/dot-auto-capture-ui/face";

type Props = {
  uiProps: FaceUiProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-face-auto-capture-ui .props="props.uiProps" id="x-dot-face-auto-capture-ui" />
</template>
