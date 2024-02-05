<script setup>
import { computed, ref } from 'vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
const temperature = ref('');
const humidity = ref('');

async function addSensor() {
  await fetch('http://localhost:3000/data', {
    method: 'POST',
    body: JSON.stringify({
      sensor_id: Date.now(),
      name: 'N/A',
      temperature: temperature.value,
      humidity: humidity.value
    })
  });
  temperature.value = '';
  humidity.value = '';
}

const isValidTemperature = computed(() => {
  return temperature.value !== '' && (temperature.value > 25 || temperature.value < 10);
});

const isValidHumidity = computed(() => {
  return humidity.value !== '' && (humidity.value > 70 || humidity.value < 20);
});
</script>

<template>
  <div class="add-sensor">
    <div class="container">
      <h2 class="add-sensor__title">Добавление нового сенсора</h2>
      <form class="add-sensor__form" @submit.prevent="addSensor">
        <AppInput type="number" v-model="temperature" placeholder="введите температура" :isValid="isValidTemperature" errorText="Минимум: 10; Максимум: 25" />
        <AppInput type="number" v-model="humidity" placeholder="введите уровень влажности" :isValid="isValidHumidity" errorText="Минимум: 20; Максимум: 70" />

        <AppButton :isDisabled="isValidHumidity || isValidTemperature || !temperature || !humidity" type="submit"> Добавить сенсор </AppButton>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add-sensor {
  text-align: center;

  &__title {
    font-size: 28px;

    margin-bottom: 30px;
  }
}
</style>
