<template>
  <div :style="{ backgroundImage: 'url('+ bgRegister + ')'}" class="bg-config w-full h-full flex justify-center flex-col">
    <div class="flex flex-col w-auto h-auto border-t-4 border-t-blue-500 drop-shadow-xl border-r-4 border-r-blue-500 m-auto bg-gradient-to-r from-amber-300 to-yellow-200 justify-center items-center rounded-md">
      <h2 class="mb-10 mt-4 text-3xl text-blue-500 font-bold tracking-wider underline decoration-3">Cadastro</h2>
      <form class="px-24 py-10" @submit.prevent="">
        <div class="mb-4">
          <input class="rounded-sm placeholder-black text-black border-b-2 bg-transparent border-b-blue-700 px-2 py-1 outline-none" type="text" placeholder="Digite seu nome">
        </div>
        <div class="mb-4">
          <input class="rounded-sm placeholder-black text-black border-b-2 bg-transparent border-b-blue-700 px-2 py-1 outline-none" type="email" placeholder="Digite seu email">
        </div>
        <div class="mb-4">
          <input class="rounded-sm placeholder-black text-black border-b-2 bg-transparent border-b-blue-700 px-2 py-1 outline-none" type="password" placeholder="Digite sua senha">
        </div>
        <div class="mb-4">
          <input class="rounded-sm placeholder-black text-black border-b-2 bg-transparent border-b-blue-700 px-2 py-1 outline-none" type="text" placeholder="Digite seu telefone">
        </div>
        <div class="mb-4">
          <input class="rounded-sm placeholder-black text-black border-b-2 bg-transparent border-b-blue-700 px-2 py-1 outline-none" type="date" placeholder="Digite sua data de nascimento">
        </div>
        <div class="flex justify-center">
          <button type="submit" class="bg-blue-500 hover:scale-105 transition duration-200 ease-in-out mt-3 mb-3 py-1 rounded-md text-white font-bold tracking-widest uppercase text w-32">Cadastrar</button>
        </div>
      </form>
    </div>
    <router-link class="flex justify-center bg-blue-500 text-center text-2xl tracking-widest text-white font-bold hover:bg-blue-400" :to="{ name: 'login' }"><ArrowLeftCircleIcon class="h-7 w-7 absolute left-0 ml-2 mt-0.5"/> Voltar</router-link>
  </div>
</template>

<script>
import bgSpiderRegister from '@/assets/img/register/bg-spiderverse-register.jpg'
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'


export default {
  name: 'Register',
  components: {
    ArrowLeftCircleIcon,
  },
  data: () => ({
    bgRegister: bgSpiderRegister,
  })
}
</script>

<style scoped>
.bg-config {
  background-size: cover;
}
</style>