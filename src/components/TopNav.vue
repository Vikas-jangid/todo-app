<template>
  <div>
    <v-app-bar app flat color="grey darken-3 ">
      <v-img
        max-height="100%"
        max-width="15%"
        pa-2
        right
        src="../assets/InfoLOGO.png"
      >
      </v-img>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="font-weight-bold white--text">TODO</span>
        <span class="white--text font-weight-bold">APP</span>
      </v-toolbar-title>
      <v-app-bar-nav-icon
        right
        @click="drawer = !drawer"
        fab
        color="white"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" right color="grey lighten-4">
      <v-list>
        <div>
          <h3 class="pa-4 font-weight-normal">Menu</h3>
        </div>
        <v-list-item-group v-model="selectedItem" class="mt-2">
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-icon class="">
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="">
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      links: [
        { icon: "mdi-folder", text: "My TODO's", route: "/" },
        { icon: "mdi-plus", text: "Add Task in TODO", route: "/addedit" },
      ],
    };
  },
};
</script>
