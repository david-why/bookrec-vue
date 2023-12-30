<template>
  <div class="content"><slot /></div>
</template>

<style scoped>
.content {
  padding: 0.5em;
  background-image: linear-gradient(340deg, #cccd, #eee, #eee, #fffd), url(/img/bookrec.svg);
  background-repeat: no-repeat;
  background-position: left bottom;
}
.content :deep(p) {
  padding: 0 0.8em;
  line-height: 1.5em;
}
.content :deep(h2) span {
  font-family: Tahoma, sans-serif;
  color: #c00;
  padding: 0.2em 0.5em;
  text-shadow: 0 0 1px #f00;
}
.content :deep(li) {
  margin: 0.1em 0;
  line-height: 1.5em;
}
.content :deep(li)::marker {
  color: red;
}
.content :deep(input),
.content :deep(button) {
  /* width: 4.5em; */
  margin: 0 0.3em;
  font-size: 1em;
}
.content :deep(table) {
  width: 35em;
}
.content :deep(table) tr:nth-child(odd) {
  background-color: #ddd;
}
.content :deep(table) tr:nth-child(even) {
  background-color: #ddd;
}
.content :deep(table) td {
  text-align: center;
  padding: 0.5em 0;
  font-style: italic;
}
.content :deep(table) th {
  text-align: center;
  padding: 0.5em 0;
  background-color: #bcd;
}
@media screen and (max-width: 37.5em) {
  .content {
    padding: 2vw;
  }
  .content :deep(h2) span {
    font-size: 6vw;
    display: block;
    text-align: center;
  }
  .content :deep(input),
  .content :deep(button) {
    font-size: 4vw;
    margin: 0 1.2vw;
  }
  .content :deep(li),
  .content :deep(p),
  .content :deep(blockquote) {
    font-size: 4vw;
    line-height: 6vw;
  }
  .content :deep(li) {
    margin: 2vw 0;
  }
  .content :deep(table) {
    width: 100%;
  }
  .content :deep(table) td,
  .content :deep(table) th {
    font-size: 4vw;
    padding: 2.5vw 0;
  }
}
</style>
