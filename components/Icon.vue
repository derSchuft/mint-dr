<template>
  <font-awesome-icon v-if="ICONS[type]" :icon="ICONS[type]" class="icon" />
</template>

<script setup>
import { faPlus, faTimes, faCheck, faGlobe, faEnvelope, faPenToSquare, faSackDollar, faExpand, faLink, faFolder, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

// Prop für den Icon-Typ definieren
const props = defineProps({
  type: String,
})

// Definiere die Icon-Namen, die in FontAwesome verfügbar sind
const ICONS = {
  add: faPlus,
  close: faTimes,
  edit: faPenToSquare,
  check: faCheck,
  website: faGlobe,
  twitter: faTwitter,
  github: faGithub,
  email: faEnvelope,
  withdraw: faSackDollar,
  maximize: faExpand,
  link: faLink,
  folder: faFolder,
  trash: faTrash,

}
</script>

<style scoped>
.icon {
  display: inline-flex;
  width: 1em;
  height: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
