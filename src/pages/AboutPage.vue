<script setup lang="ts">
import ContentComponent from '@/components/ContentComponent.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
import QuoteText from '@/components/QuoteText.vue'
import TagDescText from '@/components/TagDescText.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import data from '@/data'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

function t(key: string): string {
  return i18n.t('page.about.' + key)
}
</script>

<template>
  <TitleComponent>About us</TitleComponent>
  <ContentComponent>
    <LanguageSelect></LanguageSelect>
    <QuoteText class="quote">
      <p>{{ t('quote.line1') }}</p>
      <p>{{ t('quote.line2') }}</p>
      <p>{{ t('quote.line3') }}</p>
      <p>{{ t('quote.line4') }}</p>
      <p class="quote-author">{{ t('quote.author') }}</p>
    </QuoteText>
    <hr />
    <h2>
      <span>{{ t('library.title') }}</span>
    </h2>
    <p>{{ t('library.line1') }}</p>
    <p>{{ t('library.line2') }}</p>
    <hr />
    <h2>
      <span>{{ t('creator.title') }}</span>
    </h2>
    <img class="main-image" src="@/assets/about.webp" />
    <p>{{ t('creator.line1') }}</p>
    <p>
      {{ t('creator.line2.text1') }}<i>{{ t('creator.line2.italic1') }}</i
      >{{ t('creator.line2.text2') }}<i>{{ t('creator.line2.italic2') }}</i
      >{{ t('creator.line2.text3') }}<i>{{ t('creator.line2.italic3') }}</i
      >{{ t('creator.line2.text4') }}
    </p>
    <p>
      {{ t('creator.line3.text1') }}<a href="https://python.org">{{ t('creator.line3.link1') }}</a
      >{{ t('creator.line3.text2')
      }}<a href="https://david.webook.club">{{ t('creator.line3.link2') }}</a
      >{{ t('creator.line3.text3') }}
    </p>
    <p>{{ t('creator.line4') }}</p>
    <p>{{ t('creator.line5') }}</p>
    <p>{{ t('creator.line6') }}</p>
    <p>{{ t('creator.line7') }}</p>
    <p>{{ t('creator.line8') }}</p>
    <p>
      {{ t('creator.line9.text1')
      }}<RouterLink :to="{ name: data.homePage }">{{ t('creator.line9.link1') }}</RouterLink
      >{{ t('creator.line9.text2') }}
    </p>
  </ContentComponent>
</template>

<style scoped>
.quote {
  color: unset;
}
.quote-author {
  font-weight: bold;
  text-align: right;
}
</style>
