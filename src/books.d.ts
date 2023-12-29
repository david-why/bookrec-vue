export declare interface BooksData {
  selectorDesc: Record<string, string>
  tagDesc: Record<string, string>
  books: Book[]
}

export declare interface Book {
  isbn: string
  tags: string[]
  lexile: number
  title: string
  author: string
  bookLevel: string | null
  interestLevel: string | null
  coverImage: string
  rating: number | null
  rateCount: number | null
  description: string
  publishYear: string
  location: string
}

export declare interface Restriction {
  lexileMin?: number
  lexileMax?: number
  keywords?: string[]
  tags?: string[]
  filter?: string[]
  additional?: 'recommended'[]
}

export declare interface DataData {
  recommendations: Record<string, Recommendation[]>
  unavailable: string[]
}

export declare interface Recommendation {
  id: string
  name: string
  grade?: number
  rating: number
  text: string
  createTime: number
}
