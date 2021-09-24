<template>
  <div v-if="flag" style="color: red">Name Changed</div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["user"],
  setup(props, context) {
    const flag = computed(() => {
      return props.user.name === "john";
    });
    return {
      flag
    };
  }
};
</script>
