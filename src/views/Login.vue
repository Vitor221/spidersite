<template>
  <div :style="{ backgroundImage: 'url(' + downSpider + ')'}" class="background-ajuste">

  </div>
</template>

<script>
import bgSpiderverse from '@/assets/img/login/bg-spiderverse.jpg'

export default {
  name: 'Login',
  data: () => ({
    downSpider: bgSpiderverse
  })
}
</script>

<style>
.background-ajuste {
  background-size: cover;
}
</style>