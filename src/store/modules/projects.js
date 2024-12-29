import projects from "@/assets/projects.json";

export default {
  namespaced: true,
  state: {
    projects: projects,
    filteredProjects: projects
  },
  mutations: {
    filterProjects(state, category) {
      if (category === "All") {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter(
          (project) => project.category === category
        );
      }
    }
  },
  actions: {
    applyFilter({ commit }, category) {
      commit("filterProjects", category);
    }
  },
  getters: {
    allProjects(state) {
      return state.projects;
    },
    filteredProjects(state) {
      return state.filteredProjects;
    }
  }
};
