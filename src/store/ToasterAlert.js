import { defineStore } from "pinia";

export const useToasterAlert = defineStore("ToasterAlert", {
  state: () => ({
    toastMessage: "",
    toastIcon: "",
    toastColor: "",
    displayToaster: false,
  }),

  getters: {
    getToaster: (state) => {
      return {
        toastMessage: state.toastMessage,
        toastIcon: state.toastIcon,
        toastColor: state.toastColor,
        displayToaster: state.displayToaster,
      };
    },
  },

  actions: {
    setToaster(toast) {
        (this.toastMessage = toast.message),
        (this.toastIcon = toast.icon),
        (this.toastColor = toast.color),
        (this.displayToaster = toast.display);
        setTimeout(() => {this.resetToaster()}, 3000);
    },

    resetToaster() {
      this.displayToaster = false;
      (this.toastMessage = ""), (this.toastIcon = ""), (this.toastColor = "");
    },
  },
});
