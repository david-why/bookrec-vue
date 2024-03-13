<script setup lang="ts">
import data from '@/data'
import { scrollTop } from '@/utils'
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const isHomePage = computed(() => route.name === data.homePage)
const isShowTop = ref(false)
const isRefreshing = ref(false)

function onScroll() {
  if (window.scrollY >= 2000) {
    isShowTop.value = true
  } else {
    isShowTop.value = false
  }
}

function onControllerChange() {
  if (isRefreshing.value) {
    return
  }
  isRefreshing.value = true
  location.reload()
}

onBeforeMount(() => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange)
  }
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange)
  }
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="main">
    <div class="titles">
      <a class="title-link link" href="#" v-if="!isHomePage">
        <img class="title-image" src="@/assets/bookrec.svg" alt="BOOK RECOMMENDATIONS" />
      </a>
    </div>
    <div class="about">
      <RouterLink
        v-for="page in data.pages.filter((p) => p.display)"
        class="link"
        :key="page.path"
        :to="{ name: page.name }"
      >
        {{ page.name.toUpperCase() }}
      </RouterLink>
    </div>
    <div class="content">
      <RouterView :key="$route.fullPath" />
    </div>
  </div>
  <img
    v-if="isShowTop"
    class="float top-icon"
    src="@/assets/top-icon.svg"
    alt="Go to top"
    @click="scrollTop"
  />
</template>

<style scoped>
.main {
  display: grid;
  grid-template-areas: 'titles about' 'main main';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr auto;
}
.titles,
.about {
  padding: 0.5em 0 0;
  font-size: 1.2em;
  background-color: var(--background-color-trans);
}
.titles {
  grid-area: titles;
  display: flex;
  font-weight: bold;
}
.about {
  grid-area: about;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.content {
  grid-area: main;
}
.title-link {
  display: flex;
}
.title-image {
  height: 1.2em;
}
.link,
.titles div {
  color: #ccc;
  padding: 0 1em;
  white-space: nowrap;
}
.float {
  position: fixed;
  width: 3em;
  height: 3em;
  cursor: pointer;
  opacity: 0.5;
  filter: drop-shadow(0px 2px 3px);
  bottom: 1.5em;
  right: 1.5em;
}
@media screen and (max-width: 37.5em) {
  .main {
    grid-template-areas: 'titles' 'about' 'heading' 'main';
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 100%;
  }
  .titles {
    display: none;
  }
  .about {
    font-size: 4vw;
  }
}
@media print {
  .titles,
  .about,
  .top-icon {
    display: none;
  }
}
@media all and (display-mode: standalone) {
  .about a {
    color: #ffc;
  }
}
</style>
