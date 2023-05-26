<template>
  <li>
    <div class="form-check">
      <label class="form-check-label" :class="{ completed: task.isCompleted }">
        <TodoInput
          :type="'checkbox'"
          :classList="'checkbox'"
          :checked="task.isCompleted"
          @onClick="toggleCompleted"
        />
        {{ task.title }}
        <i class="input-helper"></i>
      </label>
    </div>
    <todo-button
      @onClick="deleteItem"
      :title="'Delete'"
      :classList="'btn-danger ml-auto'"
    />
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoButton from "./TodoButton.vue";
import TodoInput from "./TodoInput.vue";
import { TaskModel } from "@/models/TaskModel";

export default defineComponent({
  name: "TodoListItem",
  components: {
    TodoInput,
    TodoButton,
  },
  props: {
    task: { required: true, type: TaskModel },
  },
  methods: {
    toggleCompleted() {
      this.$emit("toggleCompleted", this.task);
    },
    deleteItem() {
      this.$emit("deleteItem", this.task);
    },
  },
});
</script>
