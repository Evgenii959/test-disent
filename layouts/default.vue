<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePostsStore } from './../store/posts';

const store = usePostsStore();
const posts = computed(() => store.posts);
const page = computed(() => store.page);
const hasMorePosts = computed(() => store.posts.length >= store.pageSize && store.page * store.pageSize < store.totalPosts);

const fetchPosts = async () => {
  await store.fetchPosts();
};

function nextPage() {
  if (hasMorePosts.value) { 
    store.page++;
    fetchPosts();
  }
}

function previousPage() {
  if (page.value > 1 && !store.loading) {
    store.page--;
    fetchPosts();
  }
}

onMounted(() => {
  fetchPosts();
});
</script>
<template>
  <div>
    <div class="mb-4">
      <label for="search" class="block text-sm font-medium text-gray-700"
        >Search by Title</label
      >
      <input
        id="search"
        type="text"
        placeholder="Enter title"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">
        Search
      </button>
    </div>
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="cursor-pointer">ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded"
        @click="previousPage"
        :disabled="page < 1"
      >
        Previous
      </button>
      <span class="mx-4"></span>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded"
        @click="nextPage"
        :disabled="!hasMorePosts"
      >
        Next
      </button>
    </div>
    <div class="flex justify-center mt-4">
      <span>Loading...</span>
    </div>
    <div class="flex justify-center mt-4">
      <button class="px-4 py-2 bg-green-500 text-white rounded">
        Open Modal
      </button>
    </div>
  </div>
</template>
<style scoped></style>
