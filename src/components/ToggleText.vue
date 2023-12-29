<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  length: { type: Number, default: 120 },
  open: { type: Boolean, default: window.innerWidth > 600 }
})
const emit = defineEmits<{
  (event: 'toggle', open: boolean): void
}>()

const needsCut = props.text.length > props.length
const summary = props.text.substring(0, props.length)

const isOpen = ref(props.open)

emit('toggle', props.open)

function onToggle() {
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}
</script>

<template>
  <div v-html="!needsCut || isOpen ? text : summary + '...'" @click="onToggle"></div>
</template>
