<template>
  <input
    class="form-control"
    :class="classList"
    :placeholder="placeholder"
    :type="type"
    :checked="checked"
    :value="value"
    @click="onClick"
    @input="onInput($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoInput",
  components: {},
  props: {
    value: { type: String, required: true, default: "" },
    classList: { type: String, default: "" },
    placeholder: { type: String, default: "PLaceholder" },
    type: { type: String, default: "text" },
    checked: { type: Boolean, default: false },
  },
  methods: {
    onInput(event: any) {
      this.$emit("update:value", event.target.value);
    },
    onClick() {
      this.$emit("onClick");
    },
  },
});
</script>
