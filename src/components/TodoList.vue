<template>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center m-auto">
        <div class="col-lg-12">
          <div class="card px-3">
            <div class="card-body">
              <h4 class="card-title">Here are my daily tasks</h4>
              <div class="add-items d-flex">
                <form class="w-100 d-flex" @submit.prevent="createTask">
                  <todo-input
                    v-model:value.sync="task.title"
                    :classList="'todo-list-input'"
                    :placeholder="'What are you gonna do today?'"
                  />
                  <todo-button
                    :disabled="task.isInvalid"
                    :title="'Save'"
                    :classList="'btn-primary font-weight-bold'"
                  />
                </form>
              </div>
              <div class="list-wrapper">
                <ul
                  class="d-flex flex-column-reverse todo-list"
                  v-if="todoStore.todoItems.length && !todoStore.loading"
                >
                  <TodoListItem
                    v-for="todo in todoStore.todoItems"
                    :key="todo.id"
                    @toggleCompleted="toggleCompleted"
                    @deleteItem="deleteItem"
                    :task="todo"
                  />
                </ul>
                <div
                  v-if="todoStore.todoItems.length === 0 && !todoStore.loading"
                >
                  You have no tasks to do for today. Add first!
                </div>
                <div v-if="todoStore.loading">Loading...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";
import TodoInput from "./../components/TodoInput.vue";
import TodoButton from "./../components/TodoButton.vue";
import TodoListItem from "./../components/TodoListItem.vue";
import { TaskModel } from "./../models/TaskModel";
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { taskService } from "./../services/api/TaskService";
import { useTodoStore } from "@/stores/todo";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoInput,
    TodoListItem,
    TodoButton,
  },
  data() {
    return {
      task: new TaskModel(),
      todoStore: useTodoStore(),
      taskService: taskService,
    };
  },
  async mounted() {
    this.todoStore.populateState();
  },
  // computed: {
  //   ...mapStores(useTodoStore),
  // },
  methods: {
    toggleCompleted(task: any) {
      this.todoStore.toggleCompleted(task);
    },
    deleteItem(task: any) {
      this.todoStore.deleteItem(task);
    },
    async createTask() {
      console.log(this.todoStore.$state.testName);
      this.todoStore.createTask(this.task);
      this.task = new TaskModel();
    },
  },
});

// @Options({
//   name: "TodoList",
//   components: {
//     TodoInput,
//     TodoListItem,
//     TodoButton,
//   },
// })
// export default class TodoList extends Vue {
//   task = new TaskModel();
//   items: TaskModel[] = [];
//   loading = true;
//   // taskService = taskService;

//   async mounted() {
//     // this.items = await this.taskService.getAll().then((response) => {
//     //   this.loading = false;
//     //   return response;
//     // });
//   }
//   async toggleCompleted(task: TaskModel): Promise<void> {
//     // task.isCompleted = !task.isCompleted;
//     // await this.taskService.update(task);
//   }

//   async deleteItem(task: TaskModel): Promise<void> {
//     // await this.taskService.destroy(task);
//     // const index = this.items.indexOf(task);
//     // this.items.splice(index, 1);
//   }

//   createTask() {
//     // this.store.addTodoItem(this.task);
//     // this.task = new TaskModel();
//   }
// }
</script>
