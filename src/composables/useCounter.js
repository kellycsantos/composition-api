import { ref } from "vue";
export default () => {
  const counter = ref(0);
  const increment = (val = 2) => {
    counter.value += val;
  };
  const decrement = (val = 2) => {
    counter.value -= val;
  };
  return {
    counter,
    increment,
    decrement,
  };
};
