<template>
  <section id="ai-sana" class="py-16 bg-gray-900 relative overflow-hidden text-white">
    <img src="/ai-sana-bg.jpeg" alt="AI Sana background" class="absolute inset-0 w-full h-full object-cover opacity-20" />
    <div class="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
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
      </div>
      <div class="md:w-1/2" data-aos="fade-left">
        <img src="/minister-presentation.jpeg" alt="Министр презентует AI Sana" class="rounded-2xl shadow-2xl mb-4" />
        <p class="text-center text-sm text-gray-300">{{ $t('About.mrpresident') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }
</style>
