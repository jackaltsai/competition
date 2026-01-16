<script setup>
import { ref, computed } from 'vue'

// 定義目前的標籤頁狀態 ('high' 或 'junior')
const currentTab = ref('high')

// 表格標題定義
const columns = [
  { key: 'id', label: '組別' },
  { key: 'school', label: '學校' },
  { key: 'name1', label: '學生姓名1' },
  { key: 'name2', label: '學生姓名2' },
  { key: 'aiScore', label: 'AI生成圖片(60%)' },
  { key: 'narrativeScore', label: '敘事力表現(40%)' },
  { key: 'total', label: '總分' }
]

// 資料來源：高中組
const highSchoolData = [
  { id: 1, school: '智光商工', name1: '張O桐', name2: '潘O伃', aiScore: '', narrativeScore: '', total: '' },
  { id: 2, school: '智光商工', name1: '黃O暄', name2: '張O瑜', aiScore: '', narrativeScore: '', total: '' },
  { id: 3, school: '智光商工', name1: '王O文', name2: '林O辰', aiScore: '', narrativeScore: '', total: '' },
  { id: 4, school: '智光商工', name1: '林O玄', name2: '蕭O曲', aiScore: '', narrativeScore: '', total: '' },
  { id: 5, school: '智光商工', name1: '丘O卉', name2: '賴O綺', aiScore: '', narrativeScore: '', total: '' },
  { id: 6, school: '智光商工', name1: '謝O恩', name2: '莊O捷', aiScore: '', narrativeScore: '', total: '' },
  { id: 7, school: '智光商工', name1: '陳O仁', name2: '劉O延', aiScore: '', narrativeScore: '', total: '' },
  { id: 8, school: '中和高中', name1: '劉O瑄', name2: '蔡O菁', aiScore: '', narrativeScore: '', total: '' },
  { id: 9, school: '豫章工商', name1: '廖O瑈', name2: '林O穎', aiScore: '', narrativeScore: '', total: '' },
  { id: 10, school: '豫章工商', name1: '洪O慧', name2: '彭O嫻', aiScore: '', narrativeScore: '', total: '' },
  { id: 11, school: '豫章工商', name1: '梁O文', name2: '張O甯', aiScore: '', narrativeScore: '', total: '' },
  { id: 12, school: '豫章工商', name1: '賴O廷', name2: '廖O喬', aiScore: '', narrativeScore: '', total: '' },
  { id: 13, school: '錦和高中', name1: '蔡O臻', name2: '傅O綺', aiScore: '', narrativeScore: '', total: '' },
  { id: 14, school: '華僑高中', name1: '塗O涵', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 15, school: '龍潭高中', name1: '陸O銘', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 16, school: '石碇高中', name1: '蕭O涵', name2: '郭O芮', aiScore: '', narrativeScore: '', total: '' },
  { id: 17, school: '石碇高中', name1: '張O盛', name2: '薛O', aiScore: '', narrativeScore: '', total: '' },
  { id: 18, school: '新北高工', name1: '張O傑', name2: '楊O逢', aiScore: '', narrativeScore: '', total: '' },
]

// 資料來源：國中組
const juniorHighData = [
  { id: 1, school: '積穗國中', name1: '蕭O新', name2: '江O勳', aiScore: '', narrativeScore: '', total: '' },
  { id: 2, school: '積穗國中', name1: '李O育', name2: '楊O諺', aiScore: '', narrativeScore: '', total: '' },
  { id: 3, school: '積穗國中', name1: '張O桐', name2: '羅O騫', aiScore: '', narrativeScore: '', total: '' },
  { id: 4, school: '積穗國中', name1: '林O均', name2: '楊O嵐', aiScore: '', narrativeScore: '', total: '' },
  { id: 5, school: '積穗國中', name1: '林O安', name2: '鄧O綾', aiScore: '', narrativeScore: '', total: '' },
  { id: 6, school: '積穗國中', name1: '顏O恩', name2: '譚O豪', aiScore: '', narrativeScore: '', total: '' },
  { id: 7, school: '積穗國中', name1: '楊O儀', name2: '李O誼', aiScore: '', narrativeScore: '', total: '' },
  { id: 8, school: '積穗國中', name1: '蘇O璇', name2: '張O桐', aiScore: '', narrativeScore: '', total: '' },
  { id: 9, school: '漳和國中', name1: '林O曜', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 10, school: '漳和國中', name1: '陳O庠', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 11, school: '漳和國中', name1: '王O佳', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 12, school: '漳和國中', name1: '連O威', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 13, school: '漳和國中', name1: '李O叡', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 14, school: '漳和國中', name1: '辜O維', name2: '李O慶', aiScore: '', narrativeScore: '', total: '' },
  { id: 15, school: '漳和國中', name1: '張O佑', name2: '鄭O旭', aiScore: '', narrativeScore: '', total: '' },
  { id: 16, school: '漳和國中', name1: '蔡O諺', name2: '邱O洆', aiScore: '', narrativeScore: '', total: '' },
  { id: 17, school: '漳和國中', name1: '王O右', name2: '曾O泰', aiScore: '', narrativeScore: '', total: '' },
  { id: 18, school: '漳和國中', name1: '梁O鋒', name2: '侯O凱', aiScore: '', narrativeScore: '', total: '' },
  { id: 19, school: '漳和國中', name1: '許O緒', name2: '楊O銘', aiScore: '', narrativeScore: '', total: '' },
  { id: 20, school: '清水國中', name1: '李O晴', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 21, school: '清水國中', name1: '湯O祐', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 22, school: '自強國中', name1: '陳O蓁', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 23, school: '福瑞斯特', name1: '呂O成', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 24, school: '新北市立高級中學', name1: '劉O甄', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 25, school: '南山中學', name1: '林O綸', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 26, school: '錦和國中', name1: '廖O禾', name2: '楊O玥', aiScore: '', narrativeScore: '', total: '' },
  { id: 27, school: '土城國中', name1: '陳O煬', name2: '', aiScore: '', narrativeScore: '', total: '' },
  { id: 28, school: '土城國中', name1: '劉O誌', name2: '王O斌', aiScore: '', narrativeScore: '', total: '' },
  { id: 29, school: '土城國中', name1: '楊O舜', name2: '曾O鈞', aiScore: '', narrativeScore: '', total: '' },
  { id: 30, school: '土城國中', name1: '劉O綺', name2: '黃O婷', aiScore: '', narrativeScore: '', total: '' },
  { id: 31, school: '土城國中', name1: '楊O宇', name2: '吳O庭', aiScore: '', narrativeScore: '', total: '' },
  { id: 32, school: '重慶國中', name1: '朱O漢', name2: '宋O萱', aiScore: '', narrativeScore: '', total: '' },
  { id: 33, school: '重慶國中', name1: '吳O睿', name2: '林O恩', aiScore: '', narrativeScore: '', total: '' },
  { id: 34, school: '重慶國中', name1: '周O宸', name2: '林O宜', aiScore: '', narrativeScore: '', total: '' },
  { id: 35, school: '重慶國中', name1: '林O謙', name2: '侯O珍', aiScore: '', narrativeScore: '', total: '' },
  { id: 36, school: '重慶國中', name1: '張O鈞', name2: '張O棠', aiScore: '', narrativeScore: '', total: '' },
  { id: 37, school: '重慶國中', name1: '陳O燁', name2: '許O柔', aiScore: '', narrativeScore: '', total: '' },
  { id: 38, school: '重慶國中', name1: '葉O宇', name2: '陳O芸', aiScore: '', narrativeScore: '', total: '' },
  { id: 39, school: '重慶國中', name1: '蔡O哲', name2: '陳O妤', aiScore: '', narrativeScore: '', total: '' },
  { id: 40, school: '重慶國中', name1: '蔡O丞', name2: '陳O璇', aiScore: '', narrativeScore: '', total: '' },
  { id: 41, school: '重慶國中', name1: '盧O燁', name2: '程O唯', aiScore: '', narrativeScore: '', total: '' },
  { id: 42, school: '重慶國中', name1: '蕭O謙', name2: '黃O瑜', aiScore: '', narrativeScore: '', total: '' },
  { id: 43, school: '重慶國中', name1: '謝O楷', name2: '黃O榕', aiScore: '', narrativeScore: '', total: '' },
  { id: 44, school: '重慶國中', name1: '王O羽', name2: '楊O樺', aiScore: '', narrativeScore: '', total: '' },
  { id: 45, school: '重慶國中', name1: '方O偉', name2: '王O亭', aiScore: '', narrativeScore: '', total: '' },
  { id: 46, school: '重慶國中', name1: '林O旭', name2: '王O薰', aiScore: '', narrativeScore: '', total: '' },
  { id: 47, school: '重慶國中', name1: '林O新', name2: '田O如', aiScore: '', narrativeScore: '', total: '' },
  { id: 48, school: '重慶國中', name1: '康O瑞', name2: '吳O瑾', aiScore: '', narrativeScore: '', total: '' },
  { id: 49, school: '重慶國中', name1: '張O軒', name2: '胡O馨', aiScore: '', narrativeScore: '', total: '' },
  { id: 50, school: '重慶國中', name1: '張O弘', name2: '張O晴', aiScore: '', narrativeScore: '', total: '' },
  { id: 51, school: '重慶國中', name1: '陳O兆', name2: '許O瑄', aiScore: '', narrativeScore: '', total: '' },
  { id: 52, school: '重慶國中', name1: '陳O文', name2: '許O晴', aiScore: '', narrativeScore: '', total: '' },
  { id: 53, school: '重慶國中', name1: '麥O崴', name2: '許O媛', aiScore: '', narrativeScore: '', total: '' },
  { id: 54, school: '重慶國中', name1: '黃O睿', name2: '曾O僑', aiScore: '', narrativeScore: '', total: '' },
  { id: 55, school: '重慶國中', name1: '黃O晨', name2: '黃O昕', aiScore: '', narrativeScore: '', total: '' },
  { id: 56, school: '重慶國中', name1: '蔡O炘', name2: '黃O茹', aiScore: '', narrativeScore: '', total: '' },
  { id: 57, school: '重慶國中', name1: '蔡O騰', name2: '黃O姷', aiScore: '', narrativeScore: '', total: '' },
  { id: 58, school: '重慶國中', name1: '戴O宸', name2: '潘O錡', aiScore: '', narrativeScore: '', total: '' },
  { id: 59, school: '重慶國中', name1: '蘇O睿', name2: '蔡O芸', aiScore: '', narrativeScore: '', total: '' },
  { id: 60, school: '重慶國中', name1: '廖O晴', name2: '', aiScore: '', narrativeScore: '', total: '' },
]

// 根據目前 Tab 計算要顯示的資料
const displayData = computed(() => {
  return currentTab.value === 'high' ? highSchoolData : juniorHighData
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      AI基礎應用與創意繪圖競賽人才培育營 - 分組列表
    </h1>

    <div class="flex justify-center mb-6 space-x-4">
      <button
        @click="currentTab = 'high'"
        :class="[
          'px-6 py-2 rounded-full font-semibold transition-all duration-300',
          currentTab === 'high'
            ? 'bg-blue-600 text-white shadow-lg transform scale-105'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        ]"
      >
        高中組 ({{ highSchoolData.length }} 組)
      </button>
      <button
        @click="currentTab = 'junior'"
        :class="[
          'px-6 py-2 rounded-full font-semibold transition-all duration-300',
          currentTab === 'junior'
            ? 'bg-green-600 text-white shadow-lg transform scale-105'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        ]"
      >
        國中組 ({{ juniorHighData.length }} 組)
      </button>
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-700">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th v-for="col in columns" :key="col.key" class="px-6 py-4 whitespace-nowrap">
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in displayData"
              :key="item.id"
              class="bg-white border-b hover:bg-gray-50 transition-colors"
            >
              <td class="px-6 py-4 font-medium text-gray-900">{{ item.id }}</td>
              <td class="px-6 py-4">{{ item.school }}</td>
              <td class="px-6 py-4">{{ item.name1 }}</td>
              <td class="px-6 py-4">
                {{ item.name2 || '-' }} </td>
              <td class="px-6 py-4">{{ item.aiScore }}</td>
              <td class="px-6 py-4">{{ item.narrativeScore }}</td>
              <td class="px-6 py-4 font-bold text-blue-600">{{ item.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="text-center mt-4 text-gray-500 text-sm">
       顯示資料：{{ currentTab === 'high' ? '高中組' : '國中組' }}
    </div>
  </div>
</template>