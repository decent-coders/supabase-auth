import { defineStore } from "pinia";

export const useUserStore = defineStore("users", {
  state: () => ({
    page: "",
  }),

  actions: {},
});
