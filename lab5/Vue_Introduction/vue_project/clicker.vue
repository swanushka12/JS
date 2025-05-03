// vue_project\src\components\clicker.vue

<template>
  <div>    
    <button @click="click">Click</button>
    <p>Clicked {{ count }} times</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// props
const props = defineProps({
    amount: 
    {
        type: Number,
        default: 1
    }
});

// количество кликов
const count = ref(0);

// событие
const event = defineEmits(['button-clicked']);

// обработка клика
const click = () => 
{
    count.value += props.amount; 
    event('button-clicked'); 
};
</script>

<style scoped>
button 
{
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
}
</style>
