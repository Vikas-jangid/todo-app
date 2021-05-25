/* eslint-disable */
<template>
  <div>
    <v-container>
      <v-card class="pa-2" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3">
          Your Todo List
        </v-card-title>
        <template>
          <v-expansion-panels flat>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header>
                <h2>Filters</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class="px-5">
                  <v-col cols="4">
                    <v-autocomplete
                      v-model="searchTitle"
                      :items="titleList"
                      label="Search by title"
                    ></v-autocomplete>
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
                          v-model="searchDate"
                          label="Search by Date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="searchDate"
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="4">
                    <v-select
                      :items="status"
                      label="Search By Status"
                      v-model="searchStatus"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>

        <v-data-table
          :headers="headers"
          :items="paginatedData()"
          :items-per-page="5"
          hide-default-footer
          class="pa-4"
        >
          <template v-slot:body="{ items }">
            <tbody ref="dataTable">
              <tr
                v-for="item in items"
                :key="item.task_id"
                @click="selectedItem = item.task_id"
              >
                <td>{{ item.task_id }}</td>
                <td>{{ item.task_title }}</td>
                <td>{{ item.task_description }}</td>
                <td>{{ item.task_priority }}</td>
                <td>{{ item.added_on.substr(0, 10) }}</td>
                <td>
                  <v-chip
                    class="ma-2"
                    color="warning"
                    v-if="item.task_status == status[0]"
                  >
                    {{ item.task_status }}
                  </v-chip>
                  <v-chip
                    class="ma-2"
                    color="yellow"
                    v-if="item.task_status == status[1]"
                  >
                    {{ item.task_status }}
                  </v-chip>
                  <v-chip
                    class="ma-2"
                    color="success"
                    v-if="item.task_status == status[2]"
                  >
                    {{ item.task_status }}
                  </v-chip>
                </td>
                <td>
                  <router-link
                    class="text-decoration-none"
                    :to="{ path: `/addedit/${item.task_id}` }"
                  >
                    <v-icon small class="mr-2">mdi-pencil</v-icon></router-link
                  >
                  <v-icon small @click="deleteTask(item.task_id)"> mdi-delete </v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
        <v-pagination
          v-model="currentPage"
          :length="pageLength()"
          color="grey darken-3"
          class="mb-5 py-5"
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
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
      date: "",
      searchTitle: "",
      searchStatus: "",
      searchDate: "",
      status: ["Todo", "In Progress", "Done"],
      headers: [
        { text: "Task_id", align: "start", sortable: false, value: "task_id" },
        { text: "Task", align: "start", sortable: false, value: "task_title" },
        { text: "Description", value: "task_description" },
        { text: "Priority", value: "task_priority" },
        { text: "Added On", value: "added_on" },
        { text: "Status", value: "task_status" },
        { text: "Action", value: "action" },
      ],
      TodoItems: [],
      currentPage: 1,
      pageSize: 5,
      titleList: [],
    };
  },
  mixins: [searchMixin],

  computed: {},
  methods: {
    loadData() {
      this.$http.get("http://localhost:3000/todolist").then(
        (data) => {
          this.TodoItems = data.body;
           
          let titles = [];
          for (let i=0 ; i < this.TodoItems.length ; i++){
            titles.push(this.TodoItems[i].task_title)
          }
          this.titleList = titles;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    pageLength() {
      let length = Math.ceil(this.TodoItems.length / 5);
      return length;
    },
    paginatedData() {
      const start = this.currentPage * this.pageSize - this.pageSize,
        end = start + this.pageSize;
      return this.filterItem.slice(start, end);
    },
    deleteTask(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You want to Delete this Task",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal("Deleted", "You successfully deleted this file", "success");
          this.$http.delete("http://localhost:3000/delete/" + id).then(() => {
            this.loadData();
          });
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
  },

  mounted() {
    this.calLength();
  },
  created() {
    this.loadData();
  },
};
</script>
