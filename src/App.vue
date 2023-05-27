<template>
  <div class="w-screen h-screen">
    <router-view class="w-full h-full"/>
  </div> 
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@400;500;600;700&display=swap');

body {
  font-family: 'Barlow', sans-serif;
  background-color: #202020;
}
</style>