<template>
  <div>
    <button
      class="text-lg bg-green-400 px-5 py-1 h-10 text-white"
      @click="decrement()"
      :disabled="!counter"
    >
      -
    </button>
    <input type="number" class="px-3 py-2 h-10 text-center" v-model="counter" />
    <button
      class="text-lg bg-green-400 px-5 py-1 h-10 text-white"
      @click="increment()"
    >
      +
    </button>

    <!-- <input type="text" v-model="texto" /> -->
  </div>
</template>
<script setup>
import { onMounted, watch } from "@vue/runtime-core";
import useCounter from "../composables/useCounter";
const { counter, decrement, increment } = useCounter();
const texto = "ola";

onMounted(() => {
  console.log("montei");
});
</script>
<style></style>
