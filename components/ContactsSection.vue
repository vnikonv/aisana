<template>
  <section id="contacts" class="py-16 bg-blue-50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4 text-cyan-700">{{ $t('Contacts.contacts') }}</h2>
      <p class="mb-6 text-gray-700">{{ $t('Contacts.coop') }}</p>
      <div class="flex justify-center space-x-6 mb-4">
        <a href="#"><img src="/facebook.svg" alt="Facebook" class="w-6 h-6 hover:scale-110 transition"></a>
        <a href="#"><img src="/instagram.svg" alt="Instagram" class="w-6 h-6 hover:scale-110 transition"></a>
        <a href="#"><img src="/youtube.svg" alt="YouTube" class="w-6 h-6 hover:scale-110 transition"></a>
        <a href="https://github.com/vnikonv/aisana"><img src="/github-mark.svg" alt="GitHub" class="w-6 h-6 hover:scale-110 transition"></a>
      </div>
      <p class="mt-2 text-gray-700">
        <a href="mailto:mail@ku.edu.kz" class="text-cyan-700 hover:underline text-lg">mail@ku.edu.kz</a>
      </p>

      <h3 class="text-2xl font-semibold text-cyan-700 my-10">{{ $t('Contacts.dev_contacts') }}</h3>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name1') }}</p>
          <p><a href="tel:+77475110160" class="text-cyan-700 hover:underline">+7 (747) 511-01-60</a></p>
          <p><a href="https://t.me/kamarayev" class="text-cyan-700 hover:underline">@kamarayev</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name2') }}</p>
          <p><a href="https://t.me/second_nikon" class="text-cyan-700 hover:underline">@second_nikon</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name4') }}</p>
          <p><a href="tel:+77071267880" class="text-cyan-700 hover:underline">+7 (707) 126-78-80</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name5') }}</p>
          <p><a href="tel:+77054517275" class="text-cyan-700 hover:underline">+7 (705) 451-72-75</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name6') }}</p>
          <p><a href="tel:+77073650587" class="text-cyan-700 hover:underline">+7 (777) 203-28-58</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name7') }}</p>
          <p><a href="tel:+77774964172" class="text-cyan-700 hover:underline">+7 (777) 496-41-72</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name8') }}</p>
          <p><a href="tel:+77784220650" class="text-cyan-700 hover:underline">+7 (778) 422-06-50</a></p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p class="font-semibold mb-2">{{ $t('Contacts.name9') }}</p>
          <p><a href="tel:+77052336850" class="text-cyan-700 hover:underline">+7 (705) 233-68-50</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 1200px; }
</style>
