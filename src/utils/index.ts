import type { Book, DataData, Restriction } from '@/books'
import data from '@/data'
import router from '@/router'
import { useBooksStore } from '@/stores'

export function lexileToString(lexile: number) {
  if (lexile < 0) {
    return 'BR' + -lexile + 'L'
  }
  return lexile + 'L'
}

export function stringToLexile(lexile: string) {
  if (lexile.endsWith('L')) {
    lexile = lexile.substring(0, lexile.length - 1)
  }
  if (lexile.startsWith('BR')) {
    return -parseInt(lexile.substring(2))
  }
  return parseInt(lexile)
}

export function parsePath(path: string | string[]): { value: string; filter: string[] } {
  const pathArray = typeof path === 'string' ? [path] : path
  const fullPath = pathArray.join('/')
  const parts = fullPath.split(';')
  const value = parts[0]
  const filter = parts
    .slice(1)
    .map((t) => t.trim())
    .filter((t) => t)
  return { value, filter }
}

export function filterBooks(books: Book[], data: DataData, restriction: Restriction) {
  const filtered = []
  const resTags = [...(restriction.tags || []), ...(restriction.filter || [])]
  for (const book of books) {
    let ok = true
    if (
      (restriction.lexileMin !== undefined && book.lexile < restriction.lexileMin) ||
      (restriction.lexileMax !== undefined && book.lexile > restriction.lexileMax)
    ) {
      continue
    }
    if (resTags.length) {
      for (const tag of resTags) {
        ok = false
        for (const bookTag of book.tags) {
          if (tag.toLowerCase() === bookTag.toLowerCase()) {
            ok = true
            break
          }
        }
        if (!ok) {
          break
        }
      }
      if (!ok) {
        continue
      }
    }
    if (restriction.keywords?.length) {
      // eslint-disable-next-line no-useless-escape
      const title = book.title.split(/[\s\.,]+/g).map((s) => s.toLowerCase())
      // eslint-disable-next-line no-useless-escape
      const author = book.author.split(/[\s\.,]+/g).map((s) => s.toLowerCase())
      for (const keyword of restriction.keywords) {
        if (
          !title.includes(keyword.toLowerCase()) &&
          !author.includes(keyword.toLowerCase()) &&
          book.isbn !== keyword
        ) {
          ok = false
          break
        }
      }
      if (!ok) {
        continue
      }
    }
    if (
      (restriction.additional || []).includes('recommended') &&
      !data.recommendations[book.isbn]
    ) {
      continue
    }
    filtered.push(book)
  }
  return filtered
}

export function doSearch(text: string) {
  router.push({ path: '/search/' + text })
}

export function compareTags(a: string, b: string) {
  const ac = data.categories[a.split('-')[0]] !== undefined || a.startsWith('Grades-')
  const bc = data.categories[b.split('-')[0]] !== undefined || b.startsWith('Grades-')
  if (ac && !bc) {
    return 1
  }
  if (bc && !ac) {
    return -1
  }
  if (a.startsWith('Grades-') && b.startsWith('Grades-')) {
    const ag = parseInt(a.split(' ')[1])
    const bg = parseInt(b.split(' ')[1])
    if (!isNaN(ag) && !isNaN(bg)) {
      return ag - bg
    }
  }
  return a === b ? 0 : a < b ? -1 : 1
}
