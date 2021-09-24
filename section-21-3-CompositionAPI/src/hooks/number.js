import { ref, computed, isRef, isReactive, reactive } from "vue";
export const useNumber = () => {
  //ref is for primitive values and accessed via the value property
  let num = ref(0);
  const accounts = reactive({
    checkings: 9292,
    savings: 999,
  });

  console.log(isRef(num));
  console.log(isReactive(accounts));

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
