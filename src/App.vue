<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ComTest />
  <HelloWorld msg="Hello Vue 3 + Vite" @myClick="onmyclick" ref="hw" />
</template>

<script setup>
import ComTest from '@/components/ComponentTest.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { defineProps, reactive, defineEmit, ref } from 'vue'

// ref
const hw = ref(0)
const onmyclick = () => {
  console.log('click msg')
  hw.value.someMethod()
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
