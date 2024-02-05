<script setup>
defineProps({
  max: {
    type: Number,
    required: true
  },

  min: {
    type: Number,
    required: true
  },
  text: {
    type: Number,
    required: false
  }
});

const model = defineModel();
</script>

<template>
  <label>
    <input class="range" type="range" :min="min" :max="max" v-model="model" />
    {{ text }}
  </label>
</template>
<style scoped lang="scss">
.range {
  width: 100%;
  max-width: 160px;
  cursor: pointer;
}
</style>
