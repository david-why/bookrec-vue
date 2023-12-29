<script setup lang="ts">
defineProps({ component: { required: true }, elements: { type: Array<any>, requried: true } })
</script>

<template>
  <ul class="card-list">
    <li v-for="(element, index) in elements" :key="element" class="card">
      <div class="print-no-break">
        <component :is="component" :index="index" :data="element" :key="element"></component>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.card-list {
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  background-color: #0006;
}
.card {
  padding: 0.5em;
  margin: 0.5em 0.5em;
  border-radius: 1em;
  box-shadow: 0 0 0.2em #fff;
  background-image: linear-gradient(340deg, #ccc, #eee, #fff);
}
@media screen and (max-width: 37.5em) {
  .card {
    padding: 2vw;
  }
}
@media screen and (min-width: 62em) {
  .card-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 93em) {
  .card-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 124em) {
  .card-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
/* @media print { */
  .print-no-break,.card,
  .print-no-break :deep(*) {
    break-inside: avoid;
  }
  .print-no-break :deep(*) {
    break-before: avoid;
    break-after: avoid;
  }
/* } */
@media print {
  .print-no-break,.card,
  .print-no-break :deep(*) {
    break-inside: avoid;
  }
  .print-no-break :deep(*) {
    break-before: avoid;
    break-after: avoid;
  }

}
</style>
