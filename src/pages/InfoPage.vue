<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const sensorData = ref({});

async function getDataSensor() {
  const response = await fetch(`http://localhost:3000/data/${route.params.id}`);
  sensorData.value = await response.json();
}
getDataSensor();
</script>

<template>
  <div class="container">
    <table>
      <tr>
        <td>Name:</td>
        <td>{{ sensorData.name }}</td>
      </tr>
      <tr>
        <td>Sensor_id:</td>
        <td>{{ sensorData.sensor_id }}</td>
      </tr>
      <tr>
        <td>Temperature:</td>
        <td>{{ sensorData.temperature }}</td>
      </tr>
      <tr>
        <td>Id:</td>
        <td>{{ sensorData.id }}</td>
      </tr>
      <tr>
        <td>Humidity:</td>
        <td>{{ sensorData.humidity }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 300px;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

tr:nth-child(odd) {
  background-color: #f2f2f2;
}
</style>
