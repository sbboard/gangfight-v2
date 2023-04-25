<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "comic-page",
});
</script>

<template>
  <div>cid: {{ $route.params.cid }}</div>
</template>
