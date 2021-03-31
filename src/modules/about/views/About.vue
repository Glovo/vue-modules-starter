<template>
  <div class="about">
    <h1>{{ $t("This_is_an_about_page") }}</h1>
    <div>
      <select v-model="$i18n.locale">
        <option
          v-for="(o, i) in LOCALES"
          :key="i"
          :value="o.value"
          :selected="o.value === defaultLocale"
          >{{ o.caption }}</option
        >
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LOCALES } from "@/modules/i18n/locales";
export default Vue.extend({
  name: "About",
  data() {
    return {
      LOCALES,
      defaultLocale: this.$i18n.locale,
    };
  },
});
</script>
