<template>
  <Button v-if="profile.email" :to="`mailto:${profile.email}`">
    <i class="fa-regular">&#xf0e0;</i>
    <span>{{ profile.email }}</span>
  </Button>
</template>

<script setup>
defineProps(['profile'])
</script>
