// vue_project\src\App.vue

<template>
  <div id="app">
    <h1>100 Clickers</h1>
      <div v-for="n in 100" :key="n">
        <Clicker :amount="1" @button-clicked="click(n)">
          Click
        </Clicker>
      </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Clicker from './components/clicker.vue';

const emit = defineEmits();

const click = (n) => 
{
  alert(`Clicker ${n} clicked!`);
};
</script>
    
<style>
button 
{    
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
