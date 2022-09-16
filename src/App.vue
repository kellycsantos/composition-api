<template>
  <div>
    <h2>Todos</h2>
    <Todo />
    <br /><br />
    <h2>Option API</h2>
    <Counter />
    <br /><br />
    <h1>Composition API</h1>
    <CounterCompositionApi />
    <br /><br />
    <h1>Composition API 2</h1>
    <CounterCompositionApi />
  </div>
</template>
<script>
import Counter from "./components/Counter.vue";
import CounterCompositionApi from "./components/CounterCompositionApi.vue";
import Todo from "./components/Todo.vue";
export default {
  components: {
    Counter,
    CounterCompositionApi,
    Todo,
  },
  props: {},
  data() {
    return {};
  },
};
</script>
<style scoped></style>
