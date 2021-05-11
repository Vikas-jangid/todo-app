<template>
  <div>
    <v-container>
      <v-card class="ma-4 pa-4" elevation="12">
        <v-card-title class="grey darken-3 white--text rounded dispaly-3"
          >Add Task in Todo List</v-card-title
        >
        <v-form ref="todoform">
          <v-row class="my-2">
            <v-col lg="6" md="6" sm="12">
              <v-text-field
                v-model="TodoData.title"
                label="Task Title"
                prepend-icon="title"
                :rules="titleRule"
              >
              </v-text-field>
            </v-col>
            <v-col lg="6" md="6" sm="12">
              <v-select
                :items="TodoData.priorities"
                label="Select Priority"
                prepend-icon="mdi-priority-high"
                :rules="priorityRule"
                required
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
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="TodoData.date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col lg="6" md="6" sm="12">
              <v-select
                :items="TodoData.status"
                label="Select Status"
                prepend-icon="mdi-list-status"
                :rules ="statusRule"
                required
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
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              class="ma-5 pa-5 px-12 white--text"
              large
              elevation="12"
              @click="SubmitForm()"
              dark
              >Add</v-btn
            >
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
      menu2 : false,
      TodoData: {
        title: "",
        priorities: ['High' , 'low'],
        date: new Date().toISOString().substr(0, 10),
        status: ['Completed' , 'About to Complete' , 'Pending'],
        description: "",
      },
      titleRule: [(v) => v.length != 0 || "Title is required"],
      descriptionRule: [(v) => v.length > 10  || "Description should be about 10 characters"],
      statusRule: [
                    (v) => !!v || "Status is required",
                    (v) =>  (v && v.length > 0) || "Status is required"
                   ],
      priorityRule: [
                    (v) => !!v || "Status is required",
                    (v) =>  (v && v.length > 0) || "Status is required"
                   ],
    };
  },
  methods: {
    SubmitForm() {
      if (this.$refs.todoform.validate()) {
       if(this.refs.TodoData.status == " "){
         alert('status required');
       }
      }
    },
  },
};
</script>
<style></style>