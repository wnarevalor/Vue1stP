import { ref, computed } from "vue";
export const useNumber = () => {
  //ref is for primitive values and accessed via the value property
  let num = ref(0);

  function increment() {
    num.value++;
  }

  const double = computed(() => {
    return num.value * 2;
  });

  return {
    num,
    increment,
    double,
  };
};
