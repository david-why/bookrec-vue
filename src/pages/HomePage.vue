<script setup lang="ts">
import ContentComponent from '@/components/ContentComponent.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import data from '@/data'
import router from '@/router'
import { doSearch } from '@/utils'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

const lexileInput = ref<HTMLInputElement>()
const gradeInput = ref<HTMLInputElement>()
const keywordInput = ref<HTMLInputElement>()
const qrcode = ref<HTMLImageElement>()

const showQrcode = ref(false)

function submitSearch() {
  if (keywordInput.value) {
    doSearch(keywordInput.value.value)
  }
}

function parseGrade(s: string): string | null {
  if (s.toLowerCase() === 'k') {
    return 'K'
  }
  const grade = parseInt(s)
  if (isNaN(grade) || grade + '' !== s || grade < 1 || grade > 12 || Math.floor(grade) !== grade) {
    return null
  }
  return grade + ''
}

function submitLexile() {
  if (lexileInput.value && lexileInput.value.value) {
    router.push({ name: 'lexile', params: { lexile: lexileInput.value.value } })
  } else if (gradeInput.value && gradeInput.value.value) {
    const grade = parseGrade(gradeInput.value.value)
    if (grade === null) {
      window.alert('Grade must be a number between 1 and 12 or the letter "K"!')
      gradeInput.value.value = ''
      gradeInput.value.focus()
    } else {
      router.push({ name: 'grade', params: { grade: grade } })
    }
  } else {
    router.push({ name: 'LexileGrade' })
  }
}

function onShowQrcode() {
  showQrcode.value = true
  setTimeout(() => qrcode.value && qrcode.value.scrollIntoView(), 100)
}

function t(key: string): string {
  return i18n.t('page.library.' + key)
}
</script>

<template>
  <TitleComponent>
    <img class="title-img" src="@/assets/bookrec.svg" alt="BOOK RECOMMENDATIONS" />
  </TitleComponent>
  <ContentComponent>
    <LanguageSelect></LanguageSelect>
    <div class="grid">
      <div class="spancol element" style="background-color: #8884">
        <p>
          {{ t('search.text1')
          }}<RouterLink :to="{ path: '/search/' }"
            ><b>{{ t('search.bold1') }}</b></RouterLink
          >{{ t('search.text2') }}<b>{{ t('search.bold2') }}</b
          >{{ t('search.text3') }}<a :href="data.catalogLink">{{ t('search.link') }}</a>
        </p>
        <form @submit.prevent="submitSearch">
          <p style="padding: 0 0 0 0.5em">
            <input
              style="width: 60%"
              type="text"
              :placeholder="t('search.placeholder')"
              ref="keywordInput"
            />
            <button>{{ $t('general.button.search') }}</button>
          </p>
        </form>
      </div>
      <div class="spanrow element" style="background-color: #8c84">
        <h2>
          <span>{{ t('lexile.title') }}</span>
        </h2>
        <p>
          {{ t('lexile.text1') }}<b>{{ t('lexile.bold1') }}</b
          >{{ t('lexile.text2') }}
        </p>
        <form @submit.prevent="submitLexile">
          <p style="padding: 0 0 0 0.5em">
            <input
              type="number"
              style="width: 24%"
              :placeholder="t('lexile.lexile')"
              step="1"
              min="-200"
              max="1700"
              ref="lexileInput"
            />{{ t('lexile.or')
            }}<input
              type="text"
              style="width: 24%"
              :placeholder="t('lexile.grade')"
              ref="gradeInput"
            />
            <button>{{ $t('general.button.search') }}</button>
          </p>
        </form>
        <p>
          <a href="#/page/lexile">{{ t('lexile.link') }}</a>
        </p>
      </div>
      <div class="spanrow element" style="background-color: #fa84">
        <h2>
          <span>{{ t('booklist.title') }}</span>
        </h2>
        <p>
          {{ t('booklist.text1') }}<b>{{ t('booklist.bold1') }}</b
          >{{ t('booklist.text2') }}
        </p>
        <ul>
          <li>
            <a href="#/tag/Book%20Lists-NY%20Times%20Editor's%20Choice">
              {{ t('booklist.list1') }}
            </a>
          </li>
          <li>
            <a href="#/tag/Book%20Lists-Junior%20Library%20Guild%20Selection">
              {{ t('booklist.list2') }}
            </a>
          </li>
          <li>
            <a href="#/tag/Book%20Lists-NY%20Public%20Library%20100%20Best%20Titles">
              {{ t('booklist.list3') }}
            </a>
          </li>
        </ul>
        <p>
          <a href="#/category/Book%20Lists">{{ t('booklist.link') }}</a>
        </p>
      </div>
      <div class="spanrow element" style="background-color: #8ce4">
        <h2>
          <span>{{ t('award.title') }}</span>
        </h2>
        <p>
          {{ t('award.text1') }}<b>{{ t('award.bold1') }}</b
          >{{ t('award.text2') }}
        </p>
        <ul>
          <li>
            <a href="#/tag/Award%20Winners-ALA%20Best%20Book%20for%20Young%20Adults">
              {{ t('award.list1') }}
            </a>
          </li>
          <li>
            <a href="#/tag/Award%20Winners-Golden%20Kite%20Award/Honor%20Book">
              {{ t('award.list2') }}
            </a>
          </li>
          <li>
            <a href="#/tag/Award%20Winners-SLJ%20Best%20Book">{{ t('award.list3') }}</a>
          </li>
        </ul>
        <p>
          <a href="#/category/Award%20Winners">{{ t('award.link') }}</a>
        </p>
      </div>
      <div class="spanrow element" style="background-color: #ccc4">
        <h2>
          <span>{{ t('reclist.title') }}</span>
        </h2>
        <p>
          {{ t('reclist.text1') }}<b>{{ t('reclist.bold1') }}</b
          >{{ t('reclist.text2') }}
        </p>
        <ul>
          <li v-for="tag in data.issues" :key="tag">
            <RouterLink :to="{ name: 'tag', params: { tag } }">{{
              tag.split('-').slice(1).join('-')
            }}</RouterLink>
          </li>
        </ul>
        <p>
          <RouterLink :to="{ name: 'category', params: { category: 'Nighthawk\'s Choice' } }">{{
            t('reclist.link')
          }}</RouterLink>
        </p>
      </div>
      <div class="spancol element" style="background-color: #fd54">
        <h2>
          <span>{{ t('wkar.title') }}</span>
        </h2>
        <p>
          {{ t('wkar.text1') }}<b>{{ t('wkar.bold1') }}</b
          >{{ t('wkar.text2') }}
        </p>
        <p>
          <a href="#/category/What%20Kids%20Are%20Reading">{{ t('wkar.link') }}</a>
        </p>
      </div>
    </div>
    <div class="center">
      <p v-if="!showQrcode">
        <a href="javascript:void(0)" @click="onShowQrcode">{{ t('qrcode.hidden') }}</a>
      </p>
      <template v-else>
        <p>{{ t('qrcode.text') }}</p>
        <img src="@/assets/qr-binj.svg" alt="qrcode of this site" class="book-image" ref="qrcode" />
      </template>
    </div>
  </ContentComponent>
</template>

<style scoped>
.title-img {
  max-width: 40em;
  width: 100%;
}
.center {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.element {
  box-shadow: 0 0 0.6em #0006;
  padding: 0 1em;
  margin: 1em;
  border-radius: 1em;
}
.spancol {
  grid-column: span 2;
}
@media screen and (max-width: 37.5em) {
  .element {
    padding: 0 4vw;
    margin: 4vw;
    border-radius: 4vw;
  }
}
@media screen and (max-width: 48em) {
  .grid {
    grid-template-columns: 1fr;
  }
  .spancol {
    grid-column: unset;
  }
}
@media screen and (min-width: 72em) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .spanrow {
    grid-row: span 2;
  }
}
</style>
