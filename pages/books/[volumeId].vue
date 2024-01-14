<script setup lang="ts">
import type Volume from '~/types/google/books/volume.type'

const volumeId = useRoute().params.volumeId
const { GOOGLE_BOOKS_URL } = useRuntimeConfig().public

const { data: book } = await useFetch<Volume>(`/volumes/${volumeId}`, {
  baseURL: GOOGLE_BOOKS_URL,
})
</script>

<template>
  <main>
    <section>
      <div class="container">
        <pre>
          {{ book }}
        </pre>
      </div>
    </section>
  </main>
</template>
