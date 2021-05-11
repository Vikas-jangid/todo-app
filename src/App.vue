<template>
  <v-app>
    <v-main>
      <top-nav></top-nav>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import TopNav from "./components/TopNav.vue";
export default {
  components: {
    "top-nav": TopNav,
  },
  data(){
    //
  },
};
</script>