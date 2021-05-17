<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3">
          Add Task in Todo List
        </v-card-title>
        <v-form ref="todoform" method="post">
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
                v-model="TodoData.priority"
                :items="priorities"
                :item-value = "Low"
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
                :items="status"
                prepend-icon="mdi-list-status"
                item-text="status"
                v-model="TodoData.status"
                :item-value = "Todo"
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
              <v-btn
                class="ma-5 pa-5 px-12 white--text"
                large
                dark
                elevation="12"
                @click="SubmitForm()"
                >
                Add
              </v-btn>
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
      status: ["Todo", "In Progress", "Done"],
      defaultSelected: { priority: "Low", status: "Todo" },
      priorities: ["Low", "High", "Very High"],


      TodoData: {
        title: "",
        date: new Date().toISOString().substr(0, 10),
        status : "",
        priority : "",
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
          .post("http://localhost:3000/add",
          {
            task_title : this.TodoData.title,
            task_description : this.TodoData.description,
             task_status : this.TodoData.status,
             added_on : this.TodoData.date,
             task_priority : this.TodoData.priority
          })
          
          .then(function (data) {
            console.log(data);
          });
      }
    },
  },
};
</script>