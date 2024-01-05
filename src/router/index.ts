import data from '@/data'
import { scrollTop } from '@/utils'
import CategoryView from '@/views/CategoryView.vue'
import GradeView from '@/views/GradeView.vue'
import LexileView from '@/views/LexileView.vue'
import RecommendedView from '@/views/RecommendedView.vue'
import SearchView from '@/views/SearchView.vue'
import TagView from '@/views/TagView.vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    component: SearchView,
    path: '/search/:term*',
    alias: ['/Search/:term*'],
    name: 'search'
  },
  {
    component: LexileView,
    path: '/lexile/:lexile*',
    alias: ['/Lexile/:lexile*'],
    name: 'lexile'
  },
  {
    component: GradeView,
    path: '/grade/:grade*',
    alias: ['/Grade/:grade*'],
    name: 'grade'
  },
  {
    component: TagView,
    path: '/tag/:tag*',
    name: 'tag'
  },
  {
    component: CategoryView,
    path: '/category/:category',
    name: 'category'
  },
  {
    component: RecommendedView,
    path: '/recommended',
    name: 'recommended'
  }
]

data.pages.forEach((page) =>
  routes.push({
    component: page.component,
    path: '/page/' + page.path,
    alias: ['/' + page.path, ...(page.name === data.homePage ? ['/'] : [])],
    name: page.name
  })
)

routes.push({
  path: '/:anyPath(.*)*',
  redirect: { name: data.homePage }
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.afterEach(() => {
  if (location.port === '') {
    fetch(
      `https://tracker.webook.club/0?tracking=${Date.now()}+${encodeURIComponent(location.href)}`,
      { mode: 'no-cors' }
    )
  }
  scrollTop()
})

export default router
