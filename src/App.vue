<script setup>
import {ref} from "vue";
import domtoimage from 'dom-to-image'

let id = Math.floor(Math.random() * 100000000000) + 1;
let name = ref('');
let sex = ref('');
let bornYear = ref(0);
let date = ref('2023-');
let sick = ref('');
let medicine = ref('苯磺酸左氨氯地平片 2.5mg*7片*2板');
let count = ref(0);
let times = ref(0);
let pills = ref(0);

const onclick = () => {
  domtoimage.toJpeg(document.getElementById('test'), { quality: 0.95 })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `${name.value}_${medicine.value.substring(0, 3)}.jpeg`;
        link.href = dataUrl;
        link.click();
      })
      .then(() => location.reload());
}

</script>

<template>
  <header class="bg-blue-300 p-4 mb-10">
    <div class="max-w-5xl">
      <div class="text-4xl font-bold text-white">
        Prescription Generator
      </div>
    </div>
  </header>
  <div class="grid grid:cols-1 md:grid-cols-3">
    <div class="mb-2">
      姓名：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="name" type="text">
    </div>
    <div class="mb-2">
        性别：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="sex" type="text">
    </div>
    <div class="mb-2">
      出生年份：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="bornYear" type="number">
    </div>
    <div class="mb-2">
      日期：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="date" type="text">
    </div>
    <div class="mb-2">
      临床诊断：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="sick" type="text">
    </div>
    <div class="mb-2">
      药品种类/规格：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="medicine" type="text">
    </div>
    <div class="mb-2">
      数量：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="count" type="number">
    </div>
    <div class="mb-2">
      每日服用次数：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="times" type="text">
    </div>
    <div class="mb-2">
      每次服用片数：
      <input
          class="rounded border border-gray-300 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="pills" type="text">
    </div>
  </div>

  <div class="flex justify-center">
    <input @click="onclick" type="button" id="btn" value="下载"/>
  </div>

    <div id="test" class="py-20">
      <!-- title -->
      <div class="text-2xl mb-2">
        <h1 class="flex justify-center">
          亿生康医疗门诊部互联网医院
        </h1>
        <img id="logo" src="/src/assets/logo.png" class="w-28 h-28">
        <h1 class="flex justify-center">
          处方笺
        </h1>
      </div>

      <!-- Information -->
      <div class="flex flex-wrap justify-between ml-10 mr-15">
        <div class="w-2/3">
          编号：P{{ id }}
        </div>
        <div class="w-1/3">
          日期：{{ date }}
        </div>
        <div class="w-2/3">
          姓名：{{ name }}
        </div>
        <div class="w-1/3">
          性别：{{ sex }}
        </div>
        <div class="w-2/3">
          年龄：{{ 2023 - bornYear }}岁
        </div>
        <div class="w-1/3">
          科别：中医科
        </div>
        <div class="w-full">
          地址：
        </div>
        <div class="w-full">
          临床诊断：{{ sick }}
        </div>
      </div>

      <!-- Line & Company -->
      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10 mb-5">
        <!-- Line -->
        <div class="mt-2 w-full border-2 border-transparent border-b-black"></div>

        <div class="text-4xl">
          Rp
        </div>
        <div class="text-xs">
          *此处方仅限于苏州市意涵医药商店有限公司使用
        </div>
      </div>

      <!-- Name & Count -->
      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10">
        <div>{{ medicine }}</div>
        <div>&times;{{ count }}盒</div>
      </div>

      <!-- How to take -->
      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10">
        <div>用法：口服 每次{{ pills }}片 每日{{ times }}次</div>
      </div>

      <!-- Empty -->
      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10 mt-4 mb-72">
        <div>以下空白</div>
      </div>

      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10">
        <div>医&nbsp;&nbsp;师：</div>
        <img id="sign" src="/src/assets/sign.png" class="w-36 h-16">
        <div class="mr-24">审核医师：</div>
      </div>
      <div class="flex flex-wrap justify-between ml-10 mr-15 mr-10">
        <div>调&nbsp;&nbsp;配：</div>
        <div class="mr-36">审对/发药人：</div>
      </div>

      <div class="flex flex-wrap text-xs justify-between ml-10 mr-15 mr-10">
        <!-- Line -->
        <div class="mt-2 w-full border-2 border-transparent border-b-black"></div>
        <div>注：处方3日内有效</div>
      </div>
      <div class="flex flex-wrap justify-between items-end ml-10 mr-15 mr-10 -mt-2.5 ">
        <div class="text-xs">本处方开具前，就诊人已在医院初步确诊</div>
        <div>金额:__________</div>
      </div>
    </div>
</template>

<style>
#test {
  background: white;
  position: relative;
  z-index: -1;
}

#logo {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}

#sign {
  position: absolute;
  transform: translate(50%, -30%);
}

#btn {
  display: inline-block;
  background: forestgreen;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
