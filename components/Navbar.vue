<template>
  <header class="fixed w-full z-50 bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <div class="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
      </div>

      <nav class="hidden md:flex space-x-8 text-cyan-700 font-semibold">
        <a href="#about" class="hover:text-cyan-900 transition">Главная</a>
        <a href="#agents" class="hover:text-cyan-900 transition">AI Агенты</a>
        <a href="#ai-sana" class="hover:text-cyan-900 transition">О программе</a>
        <a href="#contacts" class="hover:text-cyan-900 transition">Контакты</a>
      </nav>

      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="md:hidden bg-white shadow-inner">
      <nav class="flex flex-col space-y-4 p-6 text-cyan-700 font-semibold">
        <a href="#about" @click="close" class="hover:text-cyan-900 transition">Главная</a>
        <a href="#agents" @click="close" class="hover:text-cyan-900 transition">AI Агенты</a>
        <a href="#ai-sana" @click="close" class="hover:text-cyan-900 transition">О программе</a>
        <a href="#contacts" @click="close" class="hover:text-cyan-900 transition">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const close = () => { isOpen.value = false }
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
