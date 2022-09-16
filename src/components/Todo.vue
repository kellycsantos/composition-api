<template>
  <div>
    <div
      class="bg-green-300 flex items-center justify-between rounded-md px-5 py-2 cursor-pointer"
    >
      <span>{{ todos.id }}</span>
      <p>{{ todos.title }}</p>

      Status: {{ todos.completed }}
    </div>
  </div>
</template>
<script>
import { useAsyncState } from "@vueuse/core";
export default {
  setup() {
    const {
      state: todos,
      isReady,
      isLoading,
    } = useAsyncState(
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => json),
      {}
    );
    return {
      todos,
      isReady,
      isLoading,
    };
  },
};
</script>
