<template>
  <Button :to="`https://app.ens.domains/${address}`">
    <i class="fa-solid">&#xf044;</i>
    <span>Edit Profile</span>
  </Button>
</template>

<script setup>
defineProps(['address'])
</script>
