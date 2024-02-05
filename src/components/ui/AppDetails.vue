<script setup>
import AppRange from './AppRange.vue';

defineProps({
  placeholder: {
    type: String,
    required: false
  },
  errorText: {
    type: String,
    required: false
  },
  isEmpty: {
    type: Number,
    required: false
  }
});
const model = defineModel();
</script>

<template>
  <AppRange v-if="isEmpty" v-model="model" :text="isEmpty" :placeholder="placeholder" />
  <span v-else>Не известно</span>
</template>
<style scoped></style>
