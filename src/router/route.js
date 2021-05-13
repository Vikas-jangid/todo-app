import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../views/TodoList.vue";
import AddEdit from "../views/AddEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "todolist", component: TodoList },
  { path: "/addedit", name: "addedit", component: AddEdit },
];

const router = new VueRouter({
  routes,
});

export default router;