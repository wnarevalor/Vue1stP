import { ref, watch } from "vue";
export const usePhrase = () => {
  const phrase = ref("");
  const reversedPhrase = ref("");
  const num = ref("");

  watch(() => {
    reversedPhrase.value = phrase.value
      .split("")
      .reverse()
      .join("");
  });

  return {
    phrase,
    reversedPhrase,
    num,
  };
};
