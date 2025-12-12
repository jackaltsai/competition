<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div class="container mx-auto px-4 py-12">
      <!-- Header -->
      <header class="text-center mb-16 relative">
        <!-- Background decoration -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div class="absolute top-20 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-sm border border-slate-200/50 relative z-10"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首頁
        </NuxtLink>

        <div class="relative z-10">
          <h1 class="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">

            <span class="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI 基礎應用與創意繪圖競賽人才培育營
            </span>
          </h1>
          <p class="text-xl text-slate-600 font-medium">
            人工智慧 × 創意敘事 × 國高中人才培育
          </p>
        </div>
      </header>

      <div class="max-w-6xl mx-auto space-y-12">
        <!-- 活動目的 -->
        <section class="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-slate-800">活動目的</h2>
          </div>
          <p class="text-slate-700 leading-relaxed text-lg">
            本校餐旅學院為提升學校於鄰近國高中之能見度，並推廣人工智慧學習，
            特別邀請新北市國高中學生組隊蒞校參與 AI 培訓活動。
            透過「AI 基礎應用與創意繪圖競賽人才培育營」，協助學生建立基礎 AI
            認知能力，培養創意思維與數位敘事能力，同時強化未來招生與學習連結。
          </p>
        </section>

        <!-- 活動流程 -->
        <section class="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-slate-800">
              活動流程與議程（1 月 21 日）
            </h2>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-200/50">
            <table class="w-full text-left border-collapse bg-white/50">
              <thead>
                <tr class="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <th class="py-4 px-6 font-semibold">時間</th>
                  <th class="py-4 px-6 font-semibold">活動項目</th>
                  <th class="py-4 px-6 font-semibold">場地</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">08:00 – 08:10</td>
                  <td class="py-4 px-6">報到</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">08:10 – 08:20</td>
                  <td class="py-4 px-6">開幕式暨長官致詞</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">08:20 – 09:50</td>
                  <td class="py-4 px-6">人工智慧基礎概念介紹與趨勢應用</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors bg-amber-50/50">
                  <td class="py-4 px-6 font-medium text-amber-600">09:50 – 10:00</td>
                  <td class="py-4 px-6 text-amber-700">中場休息</td>
                  <td class="py-4 px-6">—</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">10:00 – 12:00</td>
                  <td class="py-4 px-6">AI 生成工具操作與分組練習</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors bg-green-50/50">
                  <td class="py-4 px-6 font-medium text-green-600">12:00 – 13:00</td>
                  <td class="py-4 px-6 text-green-700">午餐</td>
                  <td class="py-4 px-6">—</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">13:00 – 13:50</td>
                  <td class="py-4 px-6">主題創作時間</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors bg-amber-50/50">
                  <td class="py-4 px-6 font-medium text-amber-600">13:50 – 14:00</td>
                  <td class="py-4 px-6 text-amber-700">休息時間</td>
                  <td class="py-4 px-6">—</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors bg-purple-50/50">
                  <td class="py-4 px-6 font-medium text-purple-600">14:00 – 15:30</td>
                  <td class="py-4 px-6 text-purple-700 font-medium">
                    競賽－創意說故事大賽（每組 3 分鐘）
                  </td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
                <tr class="border-b border-slate-200/50 hover:bg-blue-50/50 transition-colors">
                  <td class="py-4 px-6 font-medium text-blue-600">15:30 – 16:30</td>
                  <td class="py-4 px-6">罕見樓特色教室參訪</td>
                  <td class="py-4 px-6">罕見樓</td>
                </tr>
                <tr class="hover:bg-blue-50/50 transition-colors bg-rose-50/50">
                  <td class="py-4 px-6 font-medium text-rose-600">16:30 – 17:00</td>
                  <td class="py-4 px-6 text-rose-700 font-medium">頒獎典禮</td>
                  <td class="py-4 px-6">罕見 306</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 競賽規則 -->
        <section class="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-slate-800">競賽規則</h2>
          </div>
          <ul class="text-slate-700 space-y-4">
            <li class="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
              <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">1</span>
              </div>
              <span>競賽主題：「生成式 AI 創意繪圖敘事力大賽」</span>
            </li>
            <li class="flex items-start gap-3 p-3 bg-purple-50/50 rounded-lg border border-purple-100">
              <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">2</span>
              </div>
              <span>參賽方式：每組2員成員為限，以 AI 生成圖片，並依圖片內容進行設計理念敘述</span>
            </li>
            <li class="flex items-start gap-3 p-3 bg-green-50/50 rounded-lg border border-green-100">
              <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">3</span>
              </div>
              <span>發表流程：作品上傳雲端 → 現場投影發表（每組 2–3 分鐘）</span>
            </li>
            <li class="flex items-start gap-3 p-3 bg-orange-50/50 rounded-lg border border-orange-100">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">4</span>
              </div>
              <span>繳交格式：PDF 電子檔（檔名：學校校名_年級_組員姓名）</span>
            </li>
            <li class="flex items-start gap-3 p-3 bg-rose-50/50 rounded-lg border border-rose-100">
              <div class="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">5</span>
              </div>
              <span>參賽費用：免費（需自備筆電，全程參與）</span>
            </li>
            <li class="flex items-start gap-3 p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
              <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span class="text-white text-sm font-bold">6</span>
              </div>
              <span>完訓可獲頒 8 小時「AI 人才培育營時數證明」</span>
            </li>
          </ul>
        </section>

        <!-- 頒獎內容 -->
        <section class="bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-slate-800">頒獎內容</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
              <h3 class="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">高</span>
                </div>
                高中組
              </h3>
              <ul class="space-y-3 text-slate-700">
                <li class="flex items-center gap-3 p-2 bg-yellow-100/70 rounded-lg">
                  <span class="text-2xl">🥇</span>
                  <span>第一名：價值約 NT$1,500 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-gray-100/70 rounded-lg">
                  <span class="text-2xl">🥈</span>
                  <span>第二名：價值約 NT$700 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-orange-100/70 rounded-lg">
                  <span class="text-2xl">🥉</span>
                  <span>第三名：價值約 NT$400 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-blue-100/70 rounded-lg">
                  <span class="text-2xl">🏆</span>
                  <span>佳作三名：價值約 NT$200 商品各 2 份</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200/50">
              <h3 class="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <div class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">國</span>
                </div>
                國中組
              </h3>
              <ul class="space-y-3 text-slate-700">
                <li class="flex items-center gap-3 p-2 bg-yellow-100/70 rounded-lg">
                  <span class="text-2xl">🥇</span>
                  <span>第一名：價值約 NT$1,500 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-gray-100/70 rounded-lg">
                  <span class="text-2xl">🥈</span>
                  <span>第二名：價值約 NT$700 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-orange-100/70 rounded-lg">
                  <span class="text-2xl">🥉</span>
                  <span>第三名：價值約 NT$400 商品 2 份</span>
                </li>
                <li class="flex items-center gap-3 p-2 bg-purple-100/70 rounded-lg">
                  <span class="text-2xl">🏆</span>
                  <span>佳作三名：價值約 NT$200 商品各 2 份</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
