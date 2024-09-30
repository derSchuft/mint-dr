<template>
  <Button v-if="validateURI(profile.url)" :to="validateURI(profile.url)" target="_blank">
    <i class="fa-brands">&#xf392;</i>
    {{ getMainDomain(profile.url) }}
  </Button>
</template>

<script setup>
defineProps(['profile'])
</script>
