<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3"
          >Your Todo List</v-card-title
        >
        <v-divider></v-divider>
        <v-row class="my-2">
          <v-col cols="4" lg="4" md="4" sm="6" xs="12">
            <v-text-field placeholder="search by title" solo></v-text-field>
          </v-col>
          <v-col cols="4" lg="4" md="4" sm="6" xs="12">
            <v-text-field v-model="date" placeholder="search by date" solo >
              <v-date-picker ref="picker" v-model="date" icon="mdi-calendar">
              </v-date-picker>
            </v-text-field>
          </v-col>
          <v-col cols="4" lg="4" md="4" sm="6" xs="12">
            <v-select
              :items="TodoItems"
              label="Search By Status"
              solo
            ></v-select>
          </v-col>
        </v-row>
        <v-data-table :headers="headers" :items="TodoItems" :items-per-page="5">
          <template v-slot:extension>
            <v-btn
            slot=
              fab
              color="cyan accent-2"
              bottom
              left
              absolute
              @click="dialog = !dialog"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-pagination v-model="page" :length="calLength()" class="my-5"></v-pagination>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      date: "",
      search: "",
      status: "",
      headers: [
        { text: "Task", align: "start", sortable: false, value: "name", },
        { text: "Description", value: "Description" },
        { text: "Priority", value: "Priority" },
        { text: "Added On", value: "Added_On" },
        { text: "Status", value: "Status" },
      ],
      TodoItems: [
        {
          name: "TASK_0",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_1",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_2",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_3",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_4",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_05",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_06",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_07",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_08",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
        {
          name: "TASK_09",
          Description: "TASK NEEDED TO BE COMPLETED BY TODAY",
          Priority: "Hight",
          Added_On: "07/05/2021",
          Status: "Done",
        },
       
      ],
    };
  },
  methods:{
   calLength : function(){
      return  this.TodoItems.length / 5;

   },
   mounted(){
     this.calLength();
   }
  }
};
</script>
<style></style>
