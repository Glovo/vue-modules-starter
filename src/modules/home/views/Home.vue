<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="$t(`WELCOME`)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
