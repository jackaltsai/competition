<template>
  <div class="min-h-screen bg-cover bg-center bg-no-repeat" style="background-image: url('/bg.png')">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <header class="text-center mb-12 pt-52">
        <div class="flex items-center justify-center gap-3 mb-4">
          <img
            src="/hdut_icon.png"
            alt="icon"
            class="w-14 h-14 md:w-14 md:h-14"
          />
          <h1 class="text-4xl md:text-4xl font-bold text-black font-title">
            宏國德霖科技大學
          </h1>
        </div>
        <p class="text-xl text-gray-500 mb-8 font-body">
          Hungkuo Delin University of Technology
        </p>
        <h2 class="text-4xl md:text-4xl font-black text-purple-500 mb-6 font-title">
          AI基礎應用與創意繪圖競賽人才培育營
        </h2>

      </header>

      <!-- Carousel -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="relative overflow-hidden rounded-lg shadow-2xl bg-white/10 backdrop-blur-sm">
          <div class="relative h-96 md:h-96">
            <!-- Carousel Images -->
            <transition-group name="fade">
              <img
                v-for="(image, index) in images"
                :key="index"
                v-show="currentSlide === index"
                :src="image"
                :alt="`Slide ${index + 1}`"
                class="absolute inset-0 w-full h-full object-cover"
              />
            </transition-group>
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="previousSlide"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots Navigation -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              v-for="(image, index) in images"
              :key="`dot-${index}`"
              @click="goToSlide(index)"
              :class="[
                'w-3 h-3 rounded-full transition-all duration-300',
                currentSlide === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Navigation Cards -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

  <!--
  <NuxtLink
  to="/student"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-blue-500
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    組別公告
  </h3>
</NuxtLink>
-->

<!--
<NuxtLink
  to="https://drive.google.com/drive/folders/1Sp6m4MPdZECWWoo_FuZ4jjTe0WnWql8e?usp=drive_link"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-black
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    高中組
  </h3>
</NuxtLink>
-->

<!--
<NuxtLink
  to="https://drive.google.com/drive/folders/1ZOALEAej6YMwFcI5ufDawpIMiKbDxPPC?usp=drive_link"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-black
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    國中組
  </h3>
</NuxtLink>
-->

<NuxtLink
  to="https://docs.google.com/forms/d/e/1FAIpQLSd64aIT858jLZZBXXvuOjUxGoStJKyb7QigkIG59zaqytaOwA/viewform?pli=1"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-fuchsia-500
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    報名專區
  </h3>
</NuxtLink>

<!--
<NuxtLink
  to="/information"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-fuchsia-500
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    比賽說明
  </h3>
</NuxtLink>
-->


<NuxtLink
  to="https://drive.google.com/drive/folders/1NQfFEwNpYweB_wYgBQm3UhilB8IF9dvT?usp=drive_link"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-fuchsia-500
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    活動集錦
  </h3>
</NuxtLink>


<NuxtLink
  to="/contactus"
  class="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center
         transition-all duration-300 ease-out
         hover:bg-red-600/20 hover:scale-[1.03] hover:shadow-xl"
>
  <h3
    class="text-2xl font-semibold mb-2 font-title
           text-fuchsia-500
           transition-all duration-300 ease-out
           group-hover:text-fuchsia-600
           group-hover:scale-[1.05]"
  >
    聯絡我們
  </h3>
</NuxtLink>





      </div>

      <!-- Competition Highlights -->
      <div class="mt-16 text-center">
        <div class="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-black mb-4 font-title">第二梯次研習活動於3月28日已開放報名。第一梯次活動集錦照片可自行下載。</h3>
          <ul class="text-gray-500 space-y-2 font-body">
            <li>如有需要協助，請洽承辦人：（02）2273-3567分機814，專案助理蔡先生。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: '宏國德霖科技大學 AI 基礎應用與創意繪圖競賽人才培育營',
  description: '2025 AI 基礎應用與創意繪圖競賽，歡迎全國國高中生學生參加'
})

// Carousel data and state
const images = ['/1.JPG', '/2.JPG', '/3.JPG', '/5.JPG', '/6.JPG', '/8.JPG']
const currentSlide = ref(0)
let intervalId = null

// Navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-play functionality
onMounted(() => {
  intervalId = setInterval(nextSlide, 5000) // Change slide every 5 seconds
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>