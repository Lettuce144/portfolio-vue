<script setup>
import { ref } from 'vue';
// Create props for toggling between on and off
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: true
  }
});

// Create a local reactive state based on the prop
const localIsDisabled = ref(props.isDisabled);

// Toggle function updates the local state
function toggleTag() {
  localIsDisabled.value = !localIsDisabled.value;
}

</script>

<template>
  <span @click="toggleTag()" :class="{'enabled': localIsDisabled}" class="tag" >
    <slot></slot>
  </span>
</template>
