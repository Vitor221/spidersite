<template>
  <div :style="{ backgroundImage: 'url(' + bgSpiderHome + ')' }" class="bg-config flex">

    <div class="flex w-full h-full">
      <nav class="bg-neutral-950 text-white flex flex-col justify-center h-full w-36">
        <div class="flex flex-col items-center">
          <p class="mb-8">Aranhas criadas</p>
          <p class="mb-20">Início</p>
        </div>

        <div class="flex flex-col items-center">
          <img class="w-12 transition duration-700 hover:scale-110" :src="logoSpider" alt="logo homem aranha spiderverse">
        </div>

        <div class="flex flex-col items-center">
          <p class="mt-20">Criar aranhas</p>
          <p class="mt-8">Descobrir aranha</p>
        </div>
      </nav>

      <div class="w-full mr-5 mt-3 flex justify-end text-white">
        <p>perfil</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import logoSpider from '@/assets/img/login/logoSpider.png';
import bgSpiderHome from '@/assets/img/home/bg-spiderverse-home.jpg';

export default {
  name: "Home",
  data: () => ({
    logoSpider: logoSpider,
    bgSpiderHome: bgSpiderHome,
  }),
}
</script>

<style scoped>
.bg-config {
  background-size: cover;
}
</style>