<template>
  <section id="about" class="bg-blue-50 py-16">
    <div class="container mx-auto px-4 text-center">
      
      <h2 class="text-cyan-700 font-bold text-lg mb-2" data-aos="fade-up">
        {{ $t('HeroSection.title') }}
      </h2>

      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight" data-aos="fade-up">
        {{ $t('HeroSection.headline') }}
      </h1>

      <p class="max-w-2xl mx-auto mb-6 text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
        {{ $t('HeroSection.description') }}
      </p>

      <a
        href="#agents"
        class="inline-block bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-3 px-8 rounded-lg transition"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ $t('HeroSection.button') }}
      </a>
    </div>
  </section>
</template>

