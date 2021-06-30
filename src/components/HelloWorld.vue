<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <button @click="emit('myClick')">click1</button>
  <button @click="myClick">click2</button>
</template>

<script setup>
import { defineProps, reactive, defineEmit, useContext } from 'vue'

const props = defineProps({
  msg: String,
})
// console.log(props, 'props');

// emit
const emit = defineEmit(['myClick'])
const myClick = () => {
  emit('myClick')
}
const state = reactive({ count: 0 })

// ctx
const ctx = useContext();
console.log(ctx, 'ctx');
ctx.expose({
  someMethod() {
    console.log('some messgae from HelloWorld');
  }
})

// fetch
fetch('/api/getUsers').then(res=>{
  return res.json();
}).then(data => {
  console.error(data);
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
