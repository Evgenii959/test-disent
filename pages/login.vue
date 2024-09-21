<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const emailRef = ref('');
const router = useRouter();
</script>
<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <form>
        <input placeholder="Email" v-model="emailRef" />
      </form>
    </div>
  </div>
</template>
<style scoped></style>
