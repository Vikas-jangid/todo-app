<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3">
          Your Todo List
        </v-card-title>
        <v-divider></v-divider>
        <v-row class="my-2">
          <v-col cols="4">
            <v-text-field placeholder="search by title" v-model="search" solo></v-text-field>
          </v-col>
          <v-col cols="4">
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
          <v-col cols="4">
            <v-select :items="status" label="Search By Status" solo></v-select>
          </v-col>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="filterItem"
          :items-per-page="5"
          hide-actions
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr
                v-for="item in items"
                :key="item.name"
                @click="selectedItem = item.name"
              >
                <td>{{ item.task_title }}</td>
                <td>{{ item.task_description }}</td>
                <td>{{ item.task_status }}</td>
                <td>{{ item.added_on }}</td>
                <td>{{ item.task_priority }}</td>
                <td>
                  <router-link class="text-decoration-none" :to="{ path: `/addedit/${item.task_id}`}" >
                  <v-icon small class="mr-2" 
                    >mdi-pencil</v-icon
                  ></router-link>
                  <v-icon small @click="deleteTask(item.task_id)">
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
        <v-pagination
          v-model="page"
          :length="calLength(task_id)"
          class="my-5"
        ></v-pagination>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      menu2: false,
      page: 1,
      date: "",
      search: "",
      searchStatus:"",
      searchDate:"",
      status: ["Todo", "In Progress", "Done"],

      headers: [
        // { text: "Task_id", align: "start", sortable: false, value: "task_id" },
        { text: "Task", align: "start", sortable: false, value: "task_title" },
        { text: "Description", value: "task_description" },
        { text: "Priority", value: "task_priority" },
        { text: "Added On", value: "added_on" },
        { text: "Status", value: "task_status" },
        { text: "Action", value: "action" },
      ],
      TodoItems: [],
    };
  },
    mixins: [searchMixin],

  created() {
    this.$http.get("http://localhost:3000/todolist").then(
      (data) => {
        this.TodoItems = data.body;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    calLength: function () {
      return this.TodoItems.length / 5;
    },
    deleteTask: function (id) {
      this.$http.delete("http://localhost:3000/delete/" + id).then(() => {
        //  alert('data Deleted' , id);
        this.$swal("Good job!", "Task Deleted Successfully!", "success");
        this.$refs.datatable.clear();
      });
    },
    
  },
  mounted() {
    this.calLength();
  },
};
</script>
