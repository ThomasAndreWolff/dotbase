import { defineStore } from "pinia";

const useMockStore = defineStore("mock", () => {
  const graphData = ref(undefined);
  const graphOptions = ref(undefined);

  const getGraphData = async () => {
    const data = await useFetch("/api/observation");
    return data;
  };

  const getGraphOptions = () => {};

  return { getGraphData, getGraphOptions };
});
