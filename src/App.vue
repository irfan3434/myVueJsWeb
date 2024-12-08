<template>
  <div id="app">
    <HeaderComponent />
    <SlideshowComponent />
    <TimelineComponent />
    <router-view />
  </div>
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue';
import SlideshowComponent from "@/components/SlideshowComponent.vue";
import TimelineComponent from '@/components/TimelineComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SlideshowComponent,
    TimelineComponent,
  },

  computed: {
    direction() {
      return this.$i18n.locale === 'ar' ? 'rtl' : 'ltr';
    },
  },
};
</script>

<style>
 body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

#app {
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;

[dir="ltr"] {
  direction: ltr;
}

[dir="rtl"] {
  direction: rtl;
}
}

</style>
