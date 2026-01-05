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

      <!-- Navigation Cards -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
  <NuxtLink
  to="https://forms.gle/ocQ72BLpih1QWiU36"
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
          <h3 class="text-2xl font-bold text-black mb-4 font-title">📅 報名截止日期: 中華民國115年1月16日 17:00時止</h3>
          <!-- <ul class="text-gray-300 space-y-2 font-body">
            <li>📅 報名截止日期: 中華民國115年1月19日 10:00時止</li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '宏國德霖科技大學 AI 基礎應用與創意繪圖競賽人才培育營',
  description: '2025 AI 基礎應用與創意繪圖競賽，歡迎全國國高中生學生參加'
})
</script>