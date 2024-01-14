<script setup lang="ts">
import type Volume from '~/types/google/books/volume.type'
import type Response from '~/types/google/books/response.type'

const { GOOGLE_BOOKS_URL } = useRuntimeConfig().public

const q = ref('Gotrek and felix')

const router = useRouter()
const route = useRoute()

watch(q, () => {
  router.push({
    query: {
      q: q.value,
    },
  })
})

if (route.query.q)
  q.value = route.query.q as string

const { data } = await useFetch<Response<Volume>>('/volumes', {
  baseURL: GOOGLE_BOOKS_URL,
  query: {
    q,
    orderBy: 'relevance',
    langRestrict: 'en',
  },
})
</script>

<template>
  <main>
    <section class="py-8">
      <div class="container">
        <input
          v-model="q"
          class="border-2" type="text"
        >

        <div class="grid grid-cols-6 mt-8 gap-4">
          <BookCard
            v-for="book in data?.items"
            :id="book.id"
            :key="book.id"
            :title="book.volumeInfo.title"
            :authors="book.volumeInfo.authors"
            :description="book.volumeInfo.description"
            :image-url="book.volumeInfo.imageLinks?.thumbnail"
          />
        </div>
      </div>
    </section>
  </main>
</template>
