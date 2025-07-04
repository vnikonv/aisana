<template>
  <div>
    <Navbar />
    <main class="pt-24">
      <HeroSection />
      <AgentsSection />
      <AboutSection />
      <ContactsSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import AgentsSection from '~/components/AgentsSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ContactsSection from '~/components/ContactsSection.vue'
import FooterSection from '~/components/FooterSection.vue'

onMounted(() => {
  AOS.init({ duration: 1000, once: true })
  window.scrollTo(0, 0)
})
</script>
