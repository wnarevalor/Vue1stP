<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment">Cuck</button>
    <p>{{ name }}</p>
    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>
    <app-alert :user="user" />
    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch, computed, onBeforeMount, onMounted } from "vue";
import AppAlert from "./components/Alert.vue";
export default {
  name: "App",
  components: {
    AppAlert
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount()");
    });
    onMounted(() => {
      console.log("onMounted()");
      btn.value.addEventListener("click", () => {
        console.log("btn clicked");
      });
    });

    //ref is for primitive values and accessed via the value property
    let num = ref(0);

    function increment() {
      num.value++;
    }

    const double = computed(() => {
      return num.value * 2;
    });

    //reactive is for objects
    let user = reactive({ name: "charles", age: 25 });
    setTimeout(() => (user.name = "john"), 3000);

    const phrase = ref("");
    const reversedPhrase = ref("");

    watch(() => {
      reversedPhrase.value = phrase.value
        .split("")
        .reverse()
        .join("");
    });

    /* watch([phrase], ([newVal], [oldVal]) => {
       reversedPhrase.value = phrase.value
        .split("")
         .reverse()
        .join("");
     });*/

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn
    };
  }
};
</script>
