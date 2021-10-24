<template>


  <Header></Header>
  <FirstPage></FirstPage>
  <SecondPage></SecondPage>

</template>

<script setup>
import Header from './components/Header.vue'
import FirstPage from "./components/FirstPage/index.vue";
import SecondPage from "./components/SecondPage.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px; 
  min-width:300px;
}
</style>
