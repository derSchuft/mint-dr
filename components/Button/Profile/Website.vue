<template>
  <Button v-if="validateURI(profile.url)" :to="validateURI(profile.url)" target="_blank">
    <i class="fa-solid">&#xf0ac;</i>
    <span>{{ getMainDomain(profile.url) }}</span>
  </Button>
</template>

<script setup>
defineProps(['profile'])
</script>
