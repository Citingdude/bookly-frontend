<script setup lang="ts">
const props = defineProps<{
  id: string
  title: string
  authors: string[] | string
  description: string
  imageUrl?: string
}>()

function getAuthors(authors: string[] | string): string {
  if (typeof authors === 'string')
    return authors

  return authors.join(', ')
}
</script>

<template>
  <NuxtLink
    :to="`/books/${props.id}`"
    class="bg-gray-50 rounded-lg p-4 group"
  >
    <img
      class="bg-gray-100 aspect-[128/196] w-full rounded-sm group-hover:scale-110 transition origin-bottom"
      :src="props.imageUrl" alt=""
    >

    <div class="mt-4 space-y-2">
      <h3 class="font-bold">
        {{ props.title }}
      </h3>

      <p class="italic text-gray-600 text-sm">
        {{ getAuthors(props.authors) }}
      </p>

      <p class="line-clamp-3">
        {{ props.description }}
      </p>
    </div>
  </NuxtLink>
</template>
