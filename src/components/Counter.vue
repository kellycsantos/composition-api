<template>
  <div>
    <button
      class="text-lg bg-green-400 px-5 py-1 h-10 text-white"
      @click="decrement"
      :disabled="!counter"
    >
      -
    </button>
    <input type="number" class="px-3 py-2 h-10 text-center" v-model="counter" />
    <button
      class="text-lg bg-green-400 px-5 py-1 h-10 text-white"
      @click="increment"
    >
      +
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
};
</script>
<style></style>
