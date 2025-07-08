<template>
  <header class="fixed w-full z-50 bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">

      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" class="h-10 w-auto" />
      </div>

      <!-- Desktop navigation -->
      <nav class="hidden md:flex space-x-8 text-cyan-700 font-semibold">
        <a href="#about" class="hover:text-cyan-900 transition">{{ $t('nav.home') }}</a>
        <a href="#agents" class="hover:text-cyan-900 transition">{{ $t('nav.agents') }}</a>
        <a href="#ai-sana" class="hover:text-cyan-900 transition">{{ $t('nav.about') }}</a>
        <a href="#contacts" class="hover:text-cyan-900 transition">{{ $t('nav.contacts') }}</a>
      </nav>

      <!-- Language switcher + mobile menu button -->
      <div class="relative flex items-center space-x-4">

        <!-- Language Switcher -->
        <div class="relative">
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
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  class="hover:bg-cyan-800 transition"
                >
                  <NuxtLink
                    :to="switchLocalePath(loc.code)"
                    class="block px-4 py-2 font-semibold"
                    @click="selectLocale(loc.code)"
                  >
                    {{ getFlag(loc.code) }} {{ loc.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Hamburger Menu Button -->
        <div class="relative">
          <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
            <svg class="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Mobile Navigation Dropdown -->
          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg md:hidden z-20"
          >
            <nav class="flex flex-col space-y-4 p-4 text-cyan-700 font-semibold">
              <a href="#about" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.home') }}</a>
              <a href="#agents" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.agents') }}</a>
              <a href="#ai-sana" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.about') }}</a>
              <a href="#contacts" @click="close" class="hover:text-cyan-900 transition">{{ $t('nav.contacts') }}</a>
            </nav>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { useSwitchLocalePath } from '#i18n'
import { ref, computed, onMounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const open = ref(false)
const toggle = () => (open.value = !open.value)

const isOpen = ref(false)
const close = () => {
  isOpen.value = false
}

const availableLocales = computed(() =>
  locales.value.filter(l => l.code !== locale.value)
)

const selectLocale = async (code) => {
  localStorage.setItem('locale', code)
  await setLocale(code)
  open.value = false
}

const getFlag = (code) => {
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