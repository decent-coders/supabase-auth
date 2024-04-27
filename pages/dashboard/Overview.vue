<template lang="">
  <Title>Drugs</Title>
  <h3 class="text-3xl font-semibold text-center">Overview</h3>
  <div class="text-center mb-4 flex justify-center">
    <!-- <span class="font-semibold">Note :</span> -->
    <span class="text-gray-500 flex justify-center">
      Still thinking what should I do in this page
    </span>

    <span class="flex space-x-2 justify-center bg-white ms-2 mt-4">
      <div
        class="h-1 w-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"
      ></div>
      <div
        class="h-1 w-1 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"
      ></div>
      <div class="h-1 w-1 bg-gray-500 rounded-full animate-bounce"></div>
    </span>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "custom",
    middleware: "auth",
  });
  navigateTo("/");
</script>
<style lang=""></style>
