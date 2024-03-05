<template>
  <Heading>Dashboard</Heading>
  <div>Add your dashboard idea here</div>
  <p class="pb-4">Add your content here: {{ counter }}</p>
  <UButton @click="increment">Increment</UButton>

  <h2 class="prose prose-xl my-6">FHIR observations:</h2>
  <ClientOnly>
    <UTable :rows="observations" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { R4 as FHIR } from "@ahryman40k/ts-fhir-types";
const { data } = await useFetch("/api/observation");

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const observations = computed(() => {
  if (!data.value) {
    return [];
  }

  return data.value.map((item: FHIR.IObservation) => {
    const startDate = getExtensionByUrl(item.extension, "period")?.valuePeriod
      ?.start;
    const endDate = getExtensionByUrl(item.extension, "period")?.valuePeriod
      ?.end;

    return {
      id: item.id,
      steps: getExtensionByUrl(item.extension, "steps")?.valuePositiveInt || 0,
      start: startDate ? new Date(startDate).toLocaleDateString() : 0,
      end: endDate ? new Date(endDate).toLocaleDateString() : 0,

      user: item.subject?.reference,
    };
  });
});
</script>
