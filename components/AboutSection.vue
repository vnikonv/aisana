<template>
  <section id="ai-sana" class="py-16 bg-gray-900 relative overflow-hidden text-white min-width-[100%]">
    <img src="/ai-sana-bg.jpeg" alt="AI Sana background" class="absolute inset-0 w-full h-full object-cover opacity-20" />
    <div class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
      <div class="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 min-w-fit max-w-fit mr-8 ml-8 justify-items-center">
        <div class="md:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl" data-aos="fade-right">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('About.about') }}</h2>
          <p class="mb-4 text-gray-200">
            {{ $t('About.sentence1') }}
          </p>
          <p class="mb-4 text-gray-200">
            {{ $t('About.sentence2') }}
          </p>
          <p class="mb-6 text-gray-200">
            {{ $t('About.sentence3') }}
          </p>
          <p class="mb-6 text-gray-200">{{ $t('About.sentence4') }}</p>
          <p class="mb-4 text-gray-200">{{ $t('About.sentence5') }}</p>
        </div>
        <div class="md:w-1/2" data-aos="fade-left">
          <img src="/minister-presentation.jpeg" alt="Министр презентует AI Sana" class="rounded-2xl shadow-2xl mb-4" />
          <p class="text-xl text-center text-gray-300">{{ $t('About.mrpresident') }}</p>
        </div>
      </div>
      <div class="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 min-w-fit max-w-fit mr-8 ml-8">
        <div class="md:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl" data-aos="fade-right">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            <a class="hover:text-gray-400" href="https://ku.edu.kz/news/view?id=12689">{{ $t('About.article2') }}</a>
          </h2>
          <p class="mb-4 text-gray-200">
            {{ $t('About.article2_content1') }}
          </p>
          <p class="mb-4 text-gray-200">
            {{ $t('About.article2_content2') }}
          </p>
          <p class="mb-6 text-gray-200">
            {{ $t('About.article2_content3') }}
          </p>
          <p class="mb-4 text-gray-200">
            {{ $t('About.article2_content4') }}
          </p>
          <ul :style="{ listStyleType: 'none' }">
            <li class='mt-0 mb-2 text-gray-200 ml-4'>{{ $t('About.article2_content4_1') }}</li>
            <li class='mb-2 text-gray-200 ml-4'>{{ $t('About.article2_content4_2') }}</li>
            <li class='mb-2 text-gray-200 ml-4'>{{ $t('About.article2_content4_3') }}</li>
          </ul>
          <p class="mb-6 text-gray-200">
            {{ $t('About.article2_content5') }}
            <a href="http://education.astanahub.com/startupacademy" class="text-gray-400 hover:underline">
              {{ $t('About.article2_content6') }}
            </a>
          </p>
        </div>
        <img src="/hub.png" alt="AstanaHub Logo" class="rounded-2xl shadow-2xl mb-4" />
      </div>
    </div>
    <button
      class="bg-white/20 absolute top-1/2 left-0 transform -translate-y-1/2 p-3 hover:bg-white/30 transition"
      :style="{ width: '20px', height: '100%' }"
      @click="prevArticle"
    >
    </button>
    <button
      class="bg-white/20 absolute top-1/2 right-0 transform -translate-y-1/2 p-3 hover:bg-white/30  transition"
      :style="{ width: '20px', height: '100%' }"
      @click="nextArticle"
    >
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref(0)
const articles = [1, 2]

function prevArticle() {
  activeIndex.value = (activeIndex.value - 1 + articles.length) % articles.length
}
function nextArticle() {
  activeIndex.value = (activeIndex.value + 1) % articles.length
}
</script>

<style scoped>
.container { max-width: 1200px; }
.flex::-webkit-scrollbar { display: none; }
</style>
