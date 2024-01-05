import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import data from '@/data'
import { scrollTop } from '@/utils'

const routes: RouteRecordRaw[] = [
  {
    component: () => import('@/views/SearchView.vue'),
    path: '/search/:term*',
    alias: ['/Search/:term*'],
    name: 'search'
  },
  {
    component: () => import('@/views/LexileView.vue'),
    path: '/lexile/:lexile*',
    alias: ['/Lexile/:lexile*'],
    name: 'lexile'
  },
  {
    component: () => import('@/views/GradeView.vue'),
    path: '/grade/:grade*',
    alias: ['/Grade/:grade*'],
    name: 'grade'
  },
  {
    component: () => import('@/views/TagView.vue'),
    path: '/tag/:tag*',
    name: 'tag'
  },
  {
    component: () => import('@/views/CategoryView.vue'),
    path: '/category/:category',
    name: 'category'
  },
  {
    component: () => import('@/views/RecommendedView.vue'),
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
  scrollTop()
})

export default router
