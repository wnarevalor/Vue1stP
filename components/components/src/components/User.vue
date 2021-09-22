<template>
  <p>The user is {{ age }} years old</p>
  <button @click="onClickAge">Update age</button>
  <button @click="ageChangeFn(3)">Change age</button>
  <p>{{ ageDouble }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //required: true,
      //default: 20,
      validator(value) {
        // this.onClickAge();
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  computed: {
    ageDouble() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>

<style></style>
