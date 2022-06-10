import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
    loading: false,
    error: null
  }),
  actions: {
    async fetchProfile() {
      this.profile = {}
      this.loading = true
      try {
        this.profile = await fetch('https://api.github.com/users/PietVlem')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
