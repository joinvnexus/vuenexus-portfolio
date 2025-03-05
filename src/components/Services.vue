<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">My Services</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Discover the wide range of services I offer to help you succeed online.
      </p>

      <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
          :class="{ 'is-active': expandedService === service.id }"
        >
          <div class="card-header" @click="toggleService(service.id)">
            <div class="icon-wrapper">
              
              <!-- Vite-compatible image path -->   
              <img
                :src="getIconPath(service.icon)"
                :alt="service.title"
                class="service-icon"
                loading="lazy"
              />
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <button class="expand-btn" :aria-expanded="expandedService === service.id">
              <span class="chevron"></span>
            </button>
          </div>
          <transition name="expand">
            <div
              v-if="expandedService === service.id"
              class="card-body"
              data-aos="fade-in"
            >
              <p class="service-description">{{ service.description }}</p>
            </div>
          </transition>
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
      expandedService: null
    };
  },
  methods: {
    toggleService(serviceId) {
      this.expandedService = this.expandedService === serviceId ? null : serviceId;
    },
    // Vite-specific asset handling
    getIconPath(iconName) {
      return new URL(`../assets/icons/${iconName}`, import.meta.url).href;
      
    }
  }
};
</script>

<style scoped>
.services-section {
  padding: 80px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.section-subtitle {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.service-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  gap: 1rem;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: #4CAF5020;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.service-title {
  font-size: 1.25rem;
  color: #2c3e50;
  margin: 0;
  flex-grow: 1;
  text-align: left;
}

.expand-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}

.chevron {
  display: block;
  width: 12px;
  height: 12px;
  border-left: 2px solid #4CAF50;
  border-bottom: 2px solid #4CAF50;
  transform: rotate(-45deg);
  transition: transform 0.3s ease;
}

.service-card.is-active .chevron {
  transform: rotate(135deg);
}

.card-body {
  padding: 0 1.5rem 1.5rem;
}

.service-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
  z-index: 1;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    padding: 1rem;
  }
  
  .service-title {
    font-size: 1.1rem;
  }
}
</style>