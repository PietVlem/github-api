import { defineStore } from 'pinia'
import { useRepoStore } from '@/store/useRepo'

export const useCommitStore = defineStore('commit', {
  state: () => ({
    commits: []
  }),
  getters: {
    commits: state => state.commits,
  },
  actions: {
    async fetchCommits() {
      const repoStore = useRepoStore()
      console.log(repoStore.repo.name)
      // this.commits = await fetch(`https://api.github.com/branches/PietVlem/${repoStore.repo.name}`)
      // .then((response) => response.json())
      // console.log(this.commits)
    }
  }
})