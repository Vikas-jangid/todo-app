<template>
  <v-app>
    <v-main>
      <top-nav></top-nav>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import Topnav from "./components/Topnav.vue";
export default {
  name: "App",
  components: {
    'top-nav' : Topnav
  },
  data: () => ({
  //
  }),
};
</script>
