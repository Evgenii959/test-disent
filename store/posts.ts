import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as any[],
    loading: false,
    page: 1,
    limit: 10,
    totalPosts: 0,
    pageSize: 10,
  }),
  actions: {
    async fetchPosts() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=${this.limit}`
        );
        this.posts = response.data;
        this.totalPosts = parseInt(response.headers['x-total-count'], 10) || 0;
      } catch (error) {
        console.error('Error:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
