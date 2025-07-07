<template>
  <header class="fixed w-full z-50 bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      
      
      <div class="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
      </div>

      
      <nav class="hidden md:flex space-x-8 text-cyan-700 font-semibold">
  <a href="#about" class="hover:text-cyan-900 transition">{{ $t('nav.home') }}</a>
  <a href="#agents" class="hover:text-cyan-900 transition">{{ $t('nav.agents') }}</a>
  <a href="#ai-sana" class="hover:text-cyan-900 transition">{{ $t('nav.about') }}</a>
  <a href="#contacts" class="hover:text-cyan-900 transition">{{ $t('nav.contacts') }}</a>
</nav>


      
      <div class="flex items-center space-x-4">
        
        <div class="relative inline-block text-left">
  <button
    @click="toggle"
    class="flex items-center bg-cyan-700 text-white px-4 py-2 rounded-lg text-2xl transition"
  >
    {{ getFlag(locale) }}
    <span class="ml-2 transition-transform duration-200 text-sm" :class="{ 'rotate-180': open }">▼</span>
  </button>

  <transition name="fade-slide">
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-32 bg-cyan-700 rounded-lg shadow-lg z-10"
    >
      <ul class="py-1 text-white">
        <li
          v-for="loc in locales"
          :key="loc.code"
          class="hover:bg-cyan-800 transition"
        >
          <a
            href="#"
            @click.prevent="changeLocale(loc.code)"
            class="block px-4 py-2 font-semibold"
          >
            {{ getFlag(loc.code) }} {{ loc.name }}
          </a>
        </li>
      </ul>
    </div>
  </transition>
</div>


        
        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    
    <div v-if="isOpen" class="md:hidden bg-white shadow-inner">
      <nav class="flex flex-col space-y-4 p-6 text-cyan-700 font-semibold">
        <a href="#about" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.home') }}</a>
        <a href="#agents" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.agents') }}</a>
        <a href="#ai-sana" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.about') }}</a>
        <a href="#contacts" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.contacts') }}</a>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, watch } from 'vue'

const { locale, locales, setLocale, localePath } = useI18n()

const open = ref(false)

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}

function setLocaleFromDropdown(event) {
  const selected = event.target.value
  setLocale(selected)
  localStorage.setItem('locale', selected)
}
const toggle = () => (open.value = !open.value)

const changeLocale = async (code) => {
  locale.value = code
  localStorage.setItem('locale', code)
  open.value = false
  await setLocale(code)
  const path = localePath({ name: route.name }, code)
  router.push(path)
  
}

const getFlag = code => {
  if (code === 'en') return '🇺🇸'
  if (code === 'ru') return '🇷🇺'
  if (code === 'kz') return '🇰🇿'
  return code
}

onMounted(() => {
  const saved = localStorage.getItem('locale')
  if (saved && saved !== locale.value) {
    setLocale(saved)
  }
})



</script>

<style scoped>
.container { max-width: 1200px; }

</style>