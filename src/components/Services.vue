<template>
    <section id="services" class="services-section">
      <div class="container">
        <!-- Section Title -->
        <h2 class="section-title" data-aos="fade-up">My Services</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Discover the wide range of services I offer to help you succeed online.
        </p>
  
        <!-- Services Grid -->
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
          >
            <div class="card-header" @click="toggleService(service.id)">
              <img
                :src="`/assets/icons/${service.icon}`"
                :alt="service.title"
                class="service-icon"
              />
              <h3>{{ service.title }}</h3>
              <button class="expand-btn">
                <span v-if="expandedService === service.id">-</span>
                <span v-else>+</span>
              </button>
            </div>
            <div
              class="card-body"
              v-if="expandedService === service.id"
              data-aos="fade-in"
            >
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import services from "@/assets/services.json";
  
  export default {
    name: "Services",
    data() {
      return {
        services: services,
        expandedService: null // Tracks which service is expanded
      };
    },
    methods: {
      toggleService(serviceId) {
        // Toggle the expanded service
        this.expandedService =
          this.expandedService === serviceId ? null : serviceId;
      }
    }
  };
  </script>
  
  <style scoped>
  .services-section {
    padding: 60px 20px;
    background: #f9f9f9;
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
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  .service-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  .service-card:hover {
    transform: translateY(-10px);
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #4caf50;
    color: #fff;
    cursor: pointer;
  }
  .service-icon {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  .card-header h3 {
    flex-grow: 1;
    font-size: 1.2rem;
    margin: 0;
  }
  .expand-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .card-body {
    padding: 20px;
    background: #f9f9f9;
    color: #666;
  }
  </style>
  