<script setup lang="ts">
import type { MagnifEyeLivenessUiProps } from "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";
import "@innovatrics/dot-auto-capture-ui/magnifeye-liveness";

type Props = {
  uiProps: MagnifEyeLivenessUiProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-magnifeye-liveness-ui .props="props.uiProps" id="x-dot-magnifeye-liveness-ui" />
</template>
