import { defineStore } from 'vue';

interface IAuthStore {
  email: string;
  status: boolean;
  isLoading: boolean;
}

const defaultValue: { user: IAuthStore } = {
  user: {
    email: '',
    status: false,
    isLoading: false,
  },
};

export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,
  getters: {
    isAuth: (state: any) => state.user.status,
    isLoad: (state: any) => state.user.loading,
  },
  actions: {
    clear() {
      this.$patch(defaultValue);
    },
    set(input: IAuthStore) {
      this.$patch({ user: input });
    },
  },
});
