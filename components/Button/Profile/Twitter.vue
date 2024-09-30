<template>
  <Button v-if="profile.twitter" :to="`https://x.com/${profile.twitter}`" target="_blank">
    <i class="fa-brands">&#xe61b;</i>
    <span>{{ profile.twitter }}</span>
  </Button>
</template>

<script setup>
defineProps(['profile'])
</script>
