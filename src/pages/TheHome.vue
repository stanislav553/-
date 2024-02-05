<script setup>
import AppButton from '@/components/ui/AppButton.vue';
import AppDetails from '@/components/ui/AppDetails.vue';

import { ref, watch } from 'vue';
const sensors = ref([]);

const isLoading = ref(false);
const isLoadingDelete = ref(false);
const isError = ref(false);
const isErrorDelete = ref(false);

async function getDataSensors() {
  try {
    isLoading.value = true;
    const response = await fetch('http://localhost:3000/data');
    sensors.value = await response.json();
  } catch {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
}

async function deleteDataSensor(id) {
  isLoadingDelete.value = true;
  try {
    await fetch(`http://localhost:3000/data/${id}`, { method: 'DELETE' });
    getDataSensors();
  } catch {
    isErrorDelete.value = true;
  } finally {
    isLoadingDelete.value = false;
  }
}

watch(isErrorDelete, () => {
  if (isErrorDelete.value) alert('ошибка удаления');
  isErrorDelete.value = false;
});

getDataSensors();
</script>
<template>
  <div class="container">
    <div class="sensors" name="sensors" tag="div">
      <div v-if="isLoading">Загружается...</div>
      <div v-else-if="isError">Ошибка...</div>
      <table class="table">
        <thead class="thead">
          <tr class="thead__tr">
            <th>№</th>
            <th>Name</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <TransitionGroup tag="tbody" class="tableBody" name="sensors">
          <tr class="tbody__tr" v-for="(sensor, index) in sensors" :key="sensor.id">
            <th>{{ index + 1 }}</th>
            <th>
              <RouterLink class="sensors__link" :to="{ name: 'info', params: { id: sensor.id } }">{{ sensor.name }}</RouterLink>
            </th>
            <th>
              <AppDetails :is-empty="sensor.temperature" :min="10" :max="25" v-model="sensor.temperature" :text="+sensor.temperature" />
            </th>
            <th>
              <AppDetails :is-empty="sensor.humidity" :min="20" :max="70" v-model="sensor.humidity" :text="+sensor.humidity" />
            </th>

            <th>
              <AppButton :disabled="isLoadingDelete" @click="deleteDataSensor(sensor.id)" type="submit">✖︎</AppButton>
            </th>
          </tr>
        </TransitionGroup>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.sensors {
  overflow-x: auto;
  &__link {
    color: blue;
    &:hover {
      color: blueviolet;
    }
  }
}
.table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  @media (max-width: 576px) {
    font-size: 12px;
  }
}
.thead {
  height: 50px;
  & tr th {
    font-weight: 700;
  }
}
.table th {
  font-weight: 400;
  border: 1px solid #ddd;
  background-color: #efefef;
}
.table td {
  padding: 5px;
  border: 1px solid #ddd;
}

.sensors__range {
  width: 100%;
  max-width: 160px;
}

.sensors-enter-active,
.sensors-leave-active {
  transition: all 0.8s ease;
}
.sensors-enter-from,
.sensors-leave-to {
  transform: translateX(130px);
  opacity: 0;
}
</style>
