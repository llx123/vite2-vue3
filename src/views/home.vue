<template>
  <div>
    <HelloWorld msg="msg" @myClick="onmyclick" ref="hw"></HelloWorld>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// ref
const hw = ref(0)
const onmyclick = () => {
  console.log('click msg')
  hw.value.someMethod()
}
</script>