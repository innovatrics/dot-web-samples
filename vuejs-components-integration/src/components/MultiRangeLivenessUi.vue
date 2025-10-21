<script setup lang="ts">
import type {
  MultiRangeUiProps,
} from '@innovatrics/dot-auto-capture-ui/ui/src/types/multi-range';
import '@innovatrics/dot-auto-capture-ui/multi-range-liveness';


type Props = {
  uiProps: MultiRangeUiProps;
};
const props = defineProps<Props>();
</script>

<template>
  <x-dot-multi-range-liveness-ui .props="props.uiProps" id="x-dot-multi-range-liveness-ui" />
</template>
