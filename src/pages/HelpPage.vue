<script setup lang="ts">
import BookImage from '@/components/BookImage.vue'
import BookTag from '@/components/BookTag.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'
import QuoteText from '@/components/QuoteText.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import data from '@/data'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

function t(key: string): string {
  return i18n.t('page.help.' + key)
}
</script>

<template>
  <TitleComponent>Help</TitleComponent>
  <ContentComponent>
    <LanguageSelect></LanguageSelect>
    <QuoteText class="purpose">
      <p>{{ t('purpose.text') }}</p>
      <ul>
        <li>{{ t('purpose.item1') }}</li>
        <li>{{ t('purpose.item2') }}</li>
        <li>{{ t('purpose.item3') }}</li>
      </ul>
    </QuoteText>
    <hr />
    <h2>
      <span>{{ t('how.title') }}</span>
    </h2>
    <p>
      {{ t('how.text1') }}<b>{{ t('how.bold') }}</b
      >{{ t('how.text2') }}
    </p>
    <ol>
      <li>{{ t('how.item1') }}</li>
      <li>{{ t('how.item2') }}</li>
      <li>{{ t('how.item3') }}</li>
      <li>{{ t('how.item4') }}</li>
      <li>{{ t('how.item5') }}</li>
    </ol>
    <hr />
    <h2>
      <span>{{ t('lists.title') }}</span>
    </h2>
    <img class="main-image" src="@/assets/br_help_lists.webp" />
    <p>{{ t('lists.text') }}</p>
    <ol>
      <li>{{ t('lists.item1') }}</li>
      <li>{{ t('lists.item2') }}</li>
      <li>
        {{ t('lists.item3.text1') }}<BookTag>MG/3.9~6.5</BookTag>{{ t('lists.item3.text2')
        }}<BookTag>600L~840L</BookTag>{{ t('lists.item3.text3') }}
      </li>
      <li>{{ t('lists.item4') }}</li>
    </ol>
    <hr />
    <h2>
      <span>{{ t('books.title') }}</span>
    </h2>
    <img class="main-image" src="@/assets/br_help_books.webp">
    <p>{{ t('books.text') }}</p>
    <ol>
      <li>
        {{ t('books.item1.text1') }}<b>{{ t('books.item1.bold') }}</b
        >{{ t('books.item1.text2') }}
      </li>
      <li>{{ t('books.item2') }}</li>
      <li>
        {{ t('books.item3.text1') }}<BookTag>600L</BookTag>{{ t('books.item3.text2')
        }}<BookTag>BR40L</BookTag>{{ t('books.item3.text3') }}
      </li>
      <li>
        {{ t('books.item4.text1') }}<BookTag>MG/4.5</BookTag>{{ t('books.item4.text2') }}<b>LG</b
        >{{ t('books.item4.text3') }}<b>MG+</b>{{ t('books.item4.text4') }}<b>UG</b
        >{{ t('books.item4.text5') }}
      </li>
      <li>
        {{ t('books.item5.text1') }}<BookTag>741.5 SEL</BookTag>{{ t('books.item5.text2')
        }}<BookTag>F ZUS</BookTag>{{ t('books.item5.text3') }}<BookTag unavailable>F ZUS</BookTag
        >{{ t('books.item5.text4') }}
      </li>
    </ol>
    <hr />
    <h2>
      <span>{{ t('computer.title') }}</span>
    </h2>
    <p>{{ t('computer.text') }}</p>
    <ol>
      <li>
        {{ t('computer.item1.text1') }}<BookTag>CTRL</BookTag>+<BookTag>-</BookTag
        >{{ t('computer.item1.text2') }}<BookTag>CTRL</BookTag>+<BookTag>=</BookTag
        >{{ t('computer.item1.text3') }}
      </li>
      <li>
        {{ t('computer.item2.text1') }}<BookTag>CTRL</BookTag>+<BookTag>P</BookTag
        >{{ t('computer.item2.text2') }}
      </li>
      <li>
        {{ t('computer.item3.text1') }}<img class="icon" src="@/assets/mat_install_desktop.svg" />{{
          t('computer.item3.text2')
        }}
      </li>
    </ol>
    <hr />
    <h2>
      <span>{{ t('mobile.title') }}</span>
    </h2>
    <img class="book-image qrcode" src="@/assets/qr-binj.svg" />
    <ol>
      <li>{{ t('mobile.item1') }}</li>
      <li>{{ t('mobile.item2') }}</li>
      <li>
        {{ t('mobile.item3.text1') }}<img class="icon" src="@/assets/mat_ios_share.svg" />{{
          t('mobile.item3.text2')
        }}
      </li>
    </ol>
    <hr />
    <h2>
      <span>{{ t('feedback.title') }}</span>
    </h2>
    <p>
      {{ t('feedback.text1')
      }}<a href="mailto:david.wang15275-binj@basischina.com">{{ t('feedback.link') }}</a
      >{{ t('feedback.text2') }}
    </p>
  </ContentComponent>
</template>

<style scoped>
.qrcode {
  float: right;
  padding: 0.3em 1em;
}
.icon {
  height: 1.5em;
  margin: -0.3em 0;
}
</style>
