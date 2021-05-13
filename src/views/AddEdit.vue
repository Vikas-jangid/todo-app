<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3">
          Add Task in Todo List
        </v-card-title>
        <v-form ref="todoform">
          <v-row class="my-2">
            <v-col lg="6" md="6" sm="12">
              <v-text-field
                v-model="TodoData.title"
                label="Task Title"
                prepend-icon="title"
                :rules="titleRule"
                required
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" md="6" sm="12">
              <v-select
                item-text="priority"
                prepend-icon="mdi-priority-high"
                v-model="TodoData.defaultSelected"
                :items="TodoData.priorities"
              >
              </v-select>
            </v-col>
          </v-row>
          <v-row class="my-2">
            <v-col lg="6" md="6" sm="12">
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
                    v-model="TodoData.date"
                    label="Select Date"
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    required
                  >
                  </v-text-field>
                </template>
                <v-date-picker
                  v-model="TodoData.date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col lg="6" md="6" sm="12">
              <v-select
                :items="TodoData.status"
                prepend-icon="mdi-list-status"
                item-text="status"
                v-model="TodoData.defaultSelected"
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="my-2">
            <v-col cold="12">
              <v-textarea
                v-model="TodoData.description"
                label="Task Description"
                rows="3"
                counter="100"
                prepend-icon="message"
                :rules="descriptionRule"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <router-link to="/todolist" class="text-decoration-none" exact>
              <v-btn
                class="ma-5 pa-5 px-12 white--text"
                large
                dark
                elevation="12"
                @click.prevent="SubmitForm()"
              >
                Add
              </v-btn>
            </router-link>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu2: false,
      TodoData: {
        title: "",
        priorities: ["Low", "High", "Very High"],
        defaultSelected: { priority: "Low", status: "Todo" },
        date: new Date().toISOString().substr(0, 10),
        status: ["Todo", "In Progress", "Done"],
        description: "",
      },
      titleRule: [(v) => v.length != 0 || "Title is required"],
      descriptionRule: [
        (v) => v.length > 10 || "Description should be about 10 characters",
      ],
    };
  },
  methods: {
    SubmitForm: function () {
      if (this.$refs.todoform.validate()) {
        this.$http
          .get("https://localhost:3000/addedit", {
            // task_title: this.TodoData.title,
            // task_description: this.TodoData.description,
            // added_on: this.TodoData.date,
            // task_status: this.TodoData.status,
            // task_priority: this.TodoData.priority,
          })
          .then(function (data) {
            console.log(data);
          });
      }
    },
  },
};
</script>