import { createStore } from 'vuex'

import api from '../api'

export default createStore({
  state: {
    repos: [],
    owner: null
  },

  getters: {
    repos: (state) => {
      return state.repos
    },
    getByID: (state) => (id) => {
      return state.repos.find((repo) => repo.name === id)
    },
    getOwner: (state) => {
      return state.owner
    }
  },

  mutations: {
    SET_REPOS(state, repos) {
      state.repos = repos
    },
    SET_OWNER(state, owner) {
      state.owner = owner
    }
  },

  actions: {
    async loadRepos({ commit }) {
      try {
        const repos = await api.getRepoList()
        commit('SET_REPOS', repos)
      } catch (error) {
        console.error(error)
      }
    },

    async getOwner({ commit }) {
      try {
        const repoOwner = await api.getProfileOwner()
        commit('SET_OWNER', repoOwner)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
