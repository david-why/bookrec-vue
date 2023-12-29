import type { BooksData, DataData } from '@/books'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBooksStore = defineStore('counter', () => {
  const books = ref(undefined as unknown as BooksData)
  const data = ref(undefined as unknown as DataData)
  const tags = ref([] as string[])

  async function updateData() : Promise<DataData> {
    return (data.value = await (await fetch('/data.json')).json())
  }

  async function getData() : Promise<DataData> {
    if (data.value !== undefined) {
      updateData()
      return data.value
    }
    return await updateData()
  }

  async function updateBooks(): Promise<BooksData> {
    return (books.value = await (await fetch('/books.json')).json())
  }

  async function getBooks(): Promise<BooksData> {
    if (books.value !== undefined) {
      updateBooks()
      return books.value
    }
    return await updateBooks()
  }

  async function getTags() {
    if (tags.value.length !== 0) {
      return tags.value
    }
    tags.value = []
    for (const book of (await getBooks()).books) {
      for (const tag of book.tags) {
        if (!tags.value.includes(tag)) {
          tags.value.push(tag)
        }
      }
    }
    return tags.value
  }

  return { getData, getBooks, getTags }
})
