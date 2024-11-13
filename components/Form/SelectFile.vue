<template>
  <Button v-if="! file" type="button" @click="() => open()">
    <i class="fa-regular">&#xf1c5;</i>
    <span>Choose file</span>
  </Button>
  <FormGroup v-else>
    <Button type="button" disabled>
      <span>{{ shortString(file.name) }}</span>
      <span>({{ formatBytes(file.size) }})</span>
    </Button>
    <Button type="button" class="open" @click="() => open()">
      <i class="fa-regular">&#xf07b;</i>
    </Button>
    <Button type="button" class="reset" @click="() => reset()">
      <i class="fa-regular">&#xf2ed;</i>
    </Button>
  </FormGroup>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const emit = defineEmits<{
  change: [file: File|null|undefined]
}>()

const { files, open, reset, onChange } = useFileDialog({
  accept: 'image/*',
  multiple: false,
})

const file = computed(() => files.value?.length ? files.value[0] : null)
onChange(() => emit('change', file.value))
</script>

<style scoped>
fieldset {
  width: fit-content;
  max-width: -webkit-fill-available;

  .button {
    white-space: nowrap;

    &:first-child {
      span:last-child {
        text-align: right;
      }
    }
  }
}

.button[disabled] {
  color: var(--color);
}

.open,
.reset {
  width: min-content;
}
</style>
