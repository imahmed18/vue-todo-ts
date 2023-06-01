import { defineStore } from "pinia";
import { taskService } from "./../services/api/TaskService";
import { TaskModel } from "@/models/TaskModel";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todoItems: [] as TaskModel[],
    testName: "ahmeddd",
    loading: true,
  }),
  getters: {
    getAll(): TaskModel[] {
      return this.todoItems;
    },
  },
  actions: {
    async populateState() {
      this.todoItems = await taskService.getAll().then((response) => {
        this.loading = false;
        return response;
      });
    },
    async toggleCompleted(task: any) {
      task.isCompleted = !task.isCompleted;
      await taskService.update(task);
    },
    async deleteItem(task: any) {
      await taskService.destroy(task);
      const index = this.todoItems.indexOf(task);
      this.todoItems.splice(index, 1);
    },
    async createTask(taskData: any) {
      const task = await taskService.save(taskData);
      this.todoItems.push(task);
    },
  },
});
