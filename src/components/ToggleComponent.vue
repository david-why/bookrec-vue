<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits<{
  (type: 'toggle', value: boolean): void
}>()

const closediv = ref<HTMLDivElement>()
const opendiv = ref<HTMLDivElement>()

const isOpen = ref(props.open)

function onToggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}
</script>

<template>
  <div ref="closediv" @click="onToggle" v-if="!isOpen"><slot name="closed" /></div>
  <div ref="opendiv" @click="onToggle" v-else><slot name="open" /></div>
</template>
