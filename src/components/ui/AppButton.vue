<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    required: false
  },
  type: {
    type: String,
    required: false,
    default: 'button'
  }
});
</script>

<template>
  <button :disabled="isDisabled" class="button" :type="type"><slot /></button>
</template>

<style scoped>
.button {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.4s;
  color: #fff;
  border: transparent;
  border-radius: 5px;
  background-color: #4f9e72;

  @media (max-width: 576px) {
    font-size: 12px;
    padding: 5px;
  }
}

.button:hover {
  background-color: #22b464;
}

.button:disabled {
  cursor: not-allowed;
  background-color: #66aa84;
}
</style>
