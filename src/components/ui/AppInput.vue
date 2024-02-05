<script setup>
defineProps({
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  isValid: {
    type: Boolean,
    required: false
  },
  errorText: {
    type: String,
    required: false
  }
});

const model = defineModel();
</script>

<template>
  <label class="app-input">
    <input class="app-input__input" :class="{ 'app-input__error': isValid }" :type="type" :placeholder="placeholder" v-model="model" />
    <span class="app-input__span" v-if="isValid">{{ errorText }}</span>
  </label>
</template>

<style lang="scss" scoped>
.app-input {
  display: block;
  height: 30px;
  margin-bottom: 20px;
  text-align: center;
  &__input {
    display: block;
    margin: 0 auto;
    padding-left: 10px;
    border: 2px solid #000;
    border-radius: 10px;
    outline: 0;
  }
  &__span {
    color: red;
  }
  &__error {
    border-color: red;
  }
}
</style>
