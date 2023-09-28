<script setup lang="ts">

import type { SmileLivenessUiProps } from "@innovatrics/dot-auto-capture-ui/smile-liveness";
import "@innovatrics/dot-auto-capture-ui/smile-liveness";

type Props = {
    uiProps: SmileLivenessUiProps
}
const props = defineProps<Props>()
</script>

<template>
    <x-dot-smile-liveness-ui .props="props.uiProps" />
</template>