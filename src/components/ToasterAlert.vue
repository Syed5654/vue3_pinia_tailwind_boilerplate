<script setup>
import { useToasterAlert } from "@store/ToasterAlert";
const toasterState = useToasterAlert();
</script>

<template>
  <div
    class="toast toast-top toast-end"
    v-if="toasterState.getToaster.displayToaster"
  >
    <div
      class="alert text-white"
      :style="{ backgroundColor: toasterState.getToaster.toastColor }"
    >
      <span>{{ toasterState.getToaster.toastMessage }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
