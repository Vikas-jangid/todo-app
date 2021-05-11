<template>
  <div>
    <v-toolbar app flat color="pink darken-1  white--text  ">
      <v-app-bar-nav-icon
        right
        @click="drawer = !drawer"
        fab
        color="white "
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light white--text">TODO</span>
        <span class="white--text">APP</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="lighten-2">
      <v-list>
        <v-subheader class="display-1">
          <v-row class="pa-4"> Todo Menu </v-row>
        </v-subheader>
        <v-list-item-group v-model="selectedItem" class="">
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
        { icon: "mdi-folder", text: "My TODO List", route: "/" },
        { icon: "mdi-plus", text: "Add Work in List", route: "/addedit" },
      ],
    };
  },
};
</script>
<style></style>
