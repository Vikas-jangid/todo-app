<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3"
          >Add Task in Todo List</v-card-title
        >
        <v-row class="my-2">
          <v-col cols="6">
            <v-text-field
              v-model="message4"
              label="Task Title"
              prepend-icon="title"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select
              :items="TodoItems"
              label="Select Priority"
              prepend-icon="mdi-priority-high"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col cols="6">
             <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Select Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
          </v-col>
          <v-col cols="6">
            <v-select :items="TodoItems" label="Select Status" prepend-icon="mdi-list-status"></v-select>
          </v-col>
        </v-row>
        <v-row class="my-2">
          <v-col cold="12">
            <v-textarea
              v-model="message4"
              label="Task Description"
              rows="3"
              prepend-icon="message"
            ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="ma-5 pa-5 px-12 white--text" large elevation="12"  dark>Add</v-btn>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
    };
  },
};
</script>
<style></style>
