<script setup lang="ts">

import type { SmileLivenessUiConfiguration } from "@innovatrics/dot-auto-capture-ui/smile-liveness";
import "@innovatrics/dot-auto-capture-ui/smile-liveness";

type Props = {
    configuration: SmileLivenessUiConfiguration
}
const props = defineProps<Props>()
</script>

<template>
    <x-dot-smile-liveness-ui .configuration="props.configuration" id="x-dot-smile-liveness-ui" />
</template>