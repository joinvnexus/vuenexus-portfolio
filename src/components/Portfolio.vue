<template>
    <section id="portfolio" class="portfolio-section">
      <div class="container">
        <!-- Section Title -->
        <h2 class="section-title" data-aos="fade-up">My Portfolio</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          A collection of projects I've worked on
        </p>
  
        <!-- Filters -->
        <div class="filters" data-aos="fade-up" data-aos-delay="200">
          <button
            v-for="filter in filters"
            :key="filter"
            @click="filterProjects(filter)"
            :class="{ active: activeFilter === filter }"
          >
            {{ filter }}
          </button>
        </div>
  
        <!-- Projects Grid -->
        <div class="projects-grid" data-aos="fade-up" data-aos-delay="300">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card"
            @click="openModal(project)"
          >
            <img :src="project.image" :alt="project.title" />
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="modalProject" class="project-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>{{ modalProject.title }}</h3>
          <p>{{ modalProject.description }}</p>
          <img
            :src="`/assets/images/${modalProject.image}`"
            :alt="modalProject.title"
          />
          <a :href="modalProject.link" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    name: "Portfolio",
    data() {
      return {
        filters: ["All", "WordPress", "Frontend"],
        activeFilter: "All",
        modalProject: null
      };
    },
    computed: {
      ...mapState("projects", ["filteredProjects"])
    },
    methods: {
      ...mapActions("projects", ["applyFilter"]),
      filterProjects(category) {
        this.activeFilter = category;
        this.applyFilter(category);
      },
      openModal(project) {
        this.modalProject = project;
      },
      closeModal() {
        this.modalProject = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .portfolio-section {
    padding: 60px 20px;
    background: #fff;
  }
  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
  }
  .filters {
    text-align: center;
    margin-bottom: 30px;
  }
  .filters button {
    padding: 10px 20px;
    margin: 0 5px;
    background: #eee;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .filters button.active {
    background: #4caf50;
    color: #fff;
  }
  .projects-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .project-card {
    width: 300px;
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-10px);
  }
  .project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .project-info {
    padding: 15px;
  }
  .project-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  .modal-content img {
    width: 100%;
    margin: 20px 0;
  }
  </style>
  