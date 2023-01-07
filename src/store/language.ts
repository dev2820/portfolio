import { ref } from "vue";

const lang = ref(window.navigator.language);
export default {
  changeLang(newLang: string) {
    lang.value = newLang;
  },
  lang,
};
