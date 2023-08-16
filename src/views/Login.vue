<template>
    <div>
      <video autoplay muted loop id="video-background">
        <source :src="videoBackground" type="video/mp4" />
      </video>
    </div>
    <div class="w-full h-full bg-slate-900/10">
      <div class="flex flex-col w-80 h-full justify-center items-start">
        <transition name="welcome">
          <div v-if="showButton" class="flex absolute right-0 left-0">
            <h1
              class="tracking-widest drop-shadow-lg text-white absolute left-0 right-0 flex justify-center bottom-20 text-4xl font-bold"
            >
              Bem-vindo
            </h1>
            <button
              @click.prevent="showLogin = !showLogin"
              @click="hideButton"
              @click.once="showLogoSpider"
              class="text-white hover:scale-105 transition duration-300 py-1 bg-gradient-to-l from-zinc-800 to-indigo-950 border-t-2 border-b-2 border-t-indigo-400 border-b-orange-400 w-24 m-auto rounded-md"
            >
              Login
            </button>
          </div>
        </transition>
        <transition name="intro">
          <form
            @submit.prevent=""
            v-if="showLogin"
            class="shadow relative px-40 py-20 z-20 w-90 border-b-2 border-t-2 border-l-2 border-r-2 border-t-orange-400 border-b-blue-700 rounded-md flex flex-col ml-96 text-white bg-gradient-to-r from-zinc-800 to-indigo-950"
          >
            <h2 class="mb-16 text-3xl font-bold tracking-widest">Login</h2>
            <div class="flex flex-col">
              <label class="mb-2 text-xl font-bold">Usuário</label>
              <input
                class="w-64 rounded outline-none text-black py-1 px-2"
                type="text"
              />
            </div>

            <div class="flex flex-col mt-10">
              <label class="mb-2 text-xl font-bold">Senha</label>
              <input
                class="w-64 rounded outline-none text-black py-1 px-2"
                type="password"
              />
            </div>

            <span
              ><router-link
                class="hover:text-amber-500 transition duration-300 ease-in"
                :to="{ name: 'register' }"
                >não possui uma conta?</router-link
              ></span
            >
            
            <router-link class="w-0" :to="{ name: 'home' }">
              <button
                type="submit"
                class="font-bold tracking-widest w-28 m-auto py-2 rounded-md mt-16 bg-amber-500 ease-in transition duration-300 hover:scale-105 hover:bg-indigo-900"
              >
                ENTRAR
              </button>
            </router-link>
            

          </form>
        </transition>

        <transition name="welcome">
          <div v-show="showLogo" class="absolute right-0 mr-96 m-auto w-96">
            <img class="w-96" :src="logoSpider" alt="">
          </div>
        </transition>

        <spider-animated/>
      </div>
      
    </div>
  <!-- </div> -->
</template>

<script>
import videoBackground from '@/assets/img/login/bg-videoBackground.mp4'
import logoSpider from '@/assets/img/login/logoSpider.png'
import CitySpider from '@/assets/img/login/city-spiderverse.png'

export default {
  name: "Login",
  data: () => ({
    showLogin: false,
    active: false,
    showButton: true,
    showLogo: false,
    videoBackground: videoBackground,
    logoSpider: logoSpider,
    CitySpider: CitySpider
  }),
  methods: {
    hideButton() {
      this.showButton = false;
    },
    showLogoSpider() {
      this.showLogo = true;
    }
  }
};
</script>

<style scoped>
.background-ajuste {
  background-size: cover;
}

.shadow {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
}

.intro-enter-from,
.intro-leave-to {
  opacity: 0;
}

.intro-enter-active,
.intro-leave-active {
  transition: 0.3s;
}

.intro-enter-to,
.intro-leave-from {
  opacity: 1;
}

.welcome-leave-from {
  opacity: 1;
}

.welcome-leave-active {
  transition: 0.3s;
}

.welcome-leave-to {
  opacity: 0;
}

#video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;
  
}
</style>
