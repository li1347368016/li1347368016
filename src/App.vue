<template>
  <!-- <div class="logo"></div>
  <img :src="url" alt="" />
  <HelloWorldVue></HelloWorldVue> -->
  <router-view></router-view>
</template>
<script setup lang="ts">
import { require } from "../src/assets/require";
// const url = new URL('../src/assets/logo.png', import.meta.url).href
const url = require("../assets/logo.png");
const imgPath = "../assets/logo.png";
// imgPath.replace("@", "..");

// console.log(imgPath.replace("@", ".."));
</script>

<style scoped>
.logo {
  width: 200px;
  height: 200px;
  background: url("@/assets/logo.png");
}
</style>
