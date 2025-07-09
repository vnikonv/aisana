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
            <li v-for="pointKey in agent.points" :key="pointKey">{{ $t(pointKey) }}</li>
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
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale, messages, t } = useI18n()

const agents = computed(() => [
  {
    title: 'AI AntiFraud',
    status: t('Agents.status1'),
    statusClass: "text-green-500",
    desc: t('Agents.desc1'),
    points: ['Agents.points1.0', 'Agents.points1.1', 'Agents.points1.2', 'Agents.points1.3'],
    link: "https://antifraudml.streamlit.app/"
  },
  {
    title: t('Agents.header2'),
    status: t('Agents.status2345'),
    statusClass: "text-yellow-500",
    desc: t('Agents.desc2'),
    points: ['Agents.points2.0', 'Agents.points2.1', 'Agents.points2.2', 'Agents.points2.3']
  },
  {
    title: "CheckDoc",
    status: t('Agents.status2345'),
    statusClass: "text-yellow-500",
    desc: t('Agents.desc3'),
    points: ['Agents.points3.0', 'Agents.points3.1', 'Agents.points3.2', 'Agents.points3.3']
  },
  {
    title: t('Agents.header4'),
    status: t('Agents.status2345'),
    statusClass: "text-yellow-500",
    desc: t('Agents.desc4'),
    points: ['Agents.points4.0', 'Agents.points4.1', 'Agents.points4.2', 'Agents.points4.3']
  },
  {
    title: t('Agents.header5'),
    status: t('Agents.status2345'),
    statusClass: "text-yellow-500",
    desc: t('Agents.desc5'),
    points: ['Agents.points5.0', 'Agents.points5.1', 'Agents.points5.2', 'Agents.points5.3']
  }
])
</script>

<style scoped>
.container { max-width: 1200px; }
</style>
