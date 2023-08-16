<template>
  <div class="w-full h-full">
    <div class="w-full h-20">
      <nav class="bg-slate-950 text-white">
        <div class="flex justify-center ">
          <img class="w-16 mt-2 mb-2 transition duration-700 hover:scale-110" :src="logoSpider" alt="logo homem aranha spiderverse">
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import logoSpider from '@/assets/img/login/logoSpider.png';

export default {
  name: "Home",
  data: () => ({
    logoSpider: logoSpider
  }),
}
</script>

<style scoped>
  
</style>