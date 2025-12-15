<template>
    <NuxtLink
  to="/"
  class="absolute left-6 top-4 inline-flex items-center gap-2
         px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full
         text-slate-700 hover:text-blue-600 hover:bg-white
         transition-all duration-300 shadow-sm
         border border-slate-200/50 z-10"
>
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
  返回首頁
</NuxtLink>


  <div class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
    <!-- Background Decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-10 blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-5 blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <!-- Left: Contact Info -->
        <div class="relative">
          <!-- Floating Card Design -->
          <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <!-- Gradient Border Effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]">
              <div class="h-full w-full rounded-3xl bg-white/90 dark:bg-gray-800/90"></div>
            </div>
            
            <div class="relative z-10">
              <!-- Header Section -->
              <div class="mb-10">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg">
                  <BuildingOffice2Icon class="h-8 w-8 text-white" />
                </div>
                <h1 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
                  聯絡我們
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  歡迎與我們聯繫，我們隨時為您提供協助
                </p>
              </div>

              <!-- Contact Information Cards -->
              <div class="space-y-6">
                <!-- Address Card -->
                <div class="group relative bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-200/50 dark:border-gray-600/50">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      <BuildingOffice2Icon class="h-6 w-6 text-white" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">地址</h3>
                      <p class="text-lg font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                        236新北市土城區青雲路380巷1號
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Phone Card -->
                <div class="group relative bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-700/50 dark:to-green-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-200/50 dark:border-gray-600/50">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                      <PhoneIcon class="h-6 w-6 text-white" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">電話</h3>
                      <a
                        href="tel:+886222733567"
                        class="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 leading-relaxed"
                      >
                        (02) 2273-3567 #814
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Email Card -->
                <div class="group relative bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700/50 dark:to-purple-900/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-200/50 dark:border-gray-600/50">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                      <EnvelopeIcon class="h-6 w-6 text-white" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">電子郵件</h3>
                      <a
                        href="mailto:zykowork@mail.hdut.edu.tw"
                        class="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 leading-relaxed break-all"
                      >
                        zykowork@mail.hdut.edu.tw
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- CTA Section -->
              <div
  class="mt-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center
         bg-gradient-to-r from-blue-500/10 to-purple-500/10
         rounded-2xl border border-blue-200/50"
>
  <div class="text-center md:text-left">
    <p class="text-lg font-semibold text-gray-800">
      📞 加入 LINE 官方帳號
    </p>
    <p class="mt-2 text-gray-600 text-sm">
      即時諮詢｜報名協助
    </p>
  </div>

  <img
    src="/M_080cwhgh_GW.png"
    class="mx-auto w-36 h-36 rounded-xl bg-white p-3 shadow"
    alt="LINE QR Code"
  />
</div>

            </div>
          </div>
        </div>

        <!-- Right: Google Map -->
        <div class="relative">
          <div class="sticky top-8">
            <!-- Map Container with Enhanced Design -->
            <div class="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-4 shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
              <!-- Map Header -->
              <div class="relative z-10 mb-4 text-center">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">我們的位置</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">點擊地圖查看詳細位置</p>
              </div>

              <!-- Map with Enhanced Styling -->
              <div class="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 dark:border-gray-700/50">
                <iframe
                  class="w-full h-80 lg:h-96"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=zh-TW&amp;q=236%E6%96%B0%E5%8C%97%E5%B8%82%E5%9C%9F%E5%9F%8E%E5%8D%80%E9%9D%92%E9%9B%B2%E8%B7%AF380%E5%B7%B71%E8%99%9F+(My%20Business)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowfullscreen
                ></iframe>
                <!-- Map Overlay for Interaction -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              
              <!-- Map Footer -->
              <div class="relative z-10 mt-4 text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  🗺️ 新北市土城區 - 交通便利，歡迎蒞臨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>