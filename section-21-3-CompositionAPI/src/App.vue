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
import { reactive, ref, toRefs, onBeforeMount, onMounted } from "vue";
import { useNumber } from "@/hooks/number";
import { usePhrase } from "@/hooks/phrase";
import AppAlert from "./components/Alert.vue";
export default {
  name: "App",
  components: {
    AppAlert,
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

    //reactive is for objects
    let user = reactive({ name: "charles", age: 25 });
    setTimeout(() => (user.name = "john"), 3000);

    /* watch([phrase], ([newVal], [oldVal]) => {
       reversedPhrase.value = phrase.value
        .split("")
         .reverse()
        .join("");
     });*/

    const { num, increment, double } = useNumber();
    const { phrase, reversedPhrase, num: phraseNum } = usePhrase();
    return {
      phraseNum,
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
    };
  },
};
</script>
