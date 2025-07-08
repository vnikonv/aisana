<template>
  <section id="agents" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-cyan-700" data-aos="fade-up">{{ $t('Agents.title') }}</h2>
      <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        <div v-for="agent in agents" :key="agent.title"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 w-80"
          data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-xl font-bold mb-2 text-gray-800">{{ agent.title }}</h3>
          <p :class="agent.statusClass + ' font-semibold mb-2'">{{ agent.status }}</p>
          <p class="text-gray-600 mb-3 text-sm">{{ agent.desc }}</p>
          <ul class="text-xs text-gray-500 list-disc list-inside space-y-1">
            <li v-for="point in agent.points" :key="point">{{ point }}</li>
          </ul>
          <div v-if="agent.link" class="mt-4 text-center">
            <a :href="agent.link" target="_blank"
              class="inline-block bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 px-6 rounded-lg transition">
              {{ $t('Agents.nav') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const agents = [
  {
    title: "AI AntiFraud",
    status: "🟢 На тестировании",
    statusClass: "text-green-500",
    desc: "Поведенческий скоринг для antifraud.",
    points: ["Точность ~99%", "SHAP, Gini, KS", "Ручная проверка ↓70%", "Обработка <30 сек"],
    link: "https://antifraudml.streamlit.app/"
  },
  {
    title: "УниЭксперт",
    status: "🟡 В разработке",
    statusClass: "text-yellow-500",
    desc: "AI для поиска нормативных документов.",
    points: ["RAG-архитектура", "Экономия времени на 70%", "Интеграция с Telegram", "Охват 80% сотрудников"]
  },
  {
    title: "CheckDoc",
    status: "🟡 В разработке",
    statusClass: "text-yellow-500",
    desc: "AI-доктор для диагностики и рекомендаций.",
    points: ["Анализ симптомов за 5 мин", "1000+ пациентов в день", "Затраты ↓ в 2 раза", "Точность до 90%"]
  },
  {
    title: "AI для транспорта",
    status: "🟡 В разработке",
    statusClass: "text-yellow-500",
    desc: "Оптимизация городских маршрутов.",
    points: ["Анализ GPS и камер", "Топливо ↓ на 10%", "Пассажиропоток ↑ на 15%", "Маршруты в реальном времени"]
  },
  {
    title: "Антикоррупционный бот",
    status: "🟡 В разработке",
    statusClass: "text-yellow-500",
    desc: "Чат-бот по вопросам коррупции.",
    points: ["Уведомления и сценарии", "Обратная связь -50%", "Вовлеченность x3", "Снижение рисков"]
  }
]
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
