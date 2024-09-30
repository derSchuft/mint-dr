<template>
  <Button v-if="profile.github" :to="`https://github.com/${profile.github}`" target="_blank">
    <i class="fa-brands">&#xf09b;</i>
    <span>{{ profile.github }}</span>
  </Button>
</template>

<script setup>
defineProps(['profile'])
</script>

