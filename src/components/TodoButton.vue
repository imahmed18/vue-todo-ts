<template>
  <button class="btn" :disabled="disabled" :class="classList" @click="onClick">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoButton",
  components: {},
  props: {
    disabled: { type: Boolean, default: false },
    classList: { type: String, default: "" },
    title: { type: String, required: true },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("onClick");
      }
    },
  },
});
</script>
