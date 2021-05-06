<template>
    <div>
        <v-toolbar app color="grey lighten-4 grey--text ">
            <v-app-bar-nav-icon right @click="drawer =!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light ">TODO</span>
                <span>APP</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon color="grey">
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>    
        <v-navigation-drawer app v-model="drawer" class="teal lighten-2 " >
            <v-list >
                    <v-subheader class="white--text display-1"> | MENU |</v-subheader>
                    <hr>
                <v-list-item-group v-model="selectedItem" > 
                    <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route" >
                    <v-list-item-icon class="white--text">
                        <v-icon  v-text="link.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="white--text">
                        <v-list-item-title  v-text="link.text"></v-list-item-title>
                    </v-list-item-content>
                <hr>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        
        </v-navigation-drawer>    
    </div>
</template>
<script>

export default{
    data(){
        return{
        drawer : false,
        selectedItem : 1,
        links : [
            {icon :'mdi-card-list' , text :'My TODO List' , route : '/'},
            {icon :'mdi-plus' , text :'Add Work in List' , route : '/addedit'}
        ]
        }
    }
}
</script>
<style>
</style>