<script setup lang="ts">
import Plotly from "plotly.js-dist-min";

onMounted(() => {
  Plotly.newPlot("myDiv", data, layout);
});
</script>

<template>
  <div id="plotlyChart"></div>
</template>
