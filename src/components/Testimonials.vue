<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Client Testimonials</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Discover what others say about working with me
      </p>

      <div class="carousel-container" data-aos="fade-up" data-aos-delay="200">
        <div class="carousel-track" :style="trackStyle">
          <div 
            class="testimonial-card"
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :class="{ 'active': index === currentIndex }"
          >
            <div class="card-header">
              <img 
                :src="getImgPath(testimonial.photo)" 
                :alt="testimonial.name"
                class="user-avatar"
              >
              <div class="user-info">
                <h4 class="user-name">{{ testimonial.name }}</h4>
                <p class="user-role">{{ testimonial.designation }}</p>
              </div>
            </div>
            <p class="testimonial-text">"{{ testimonial.feedback }}"</p>
            <div class="rating">
              ★★★★★
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button 
            @click="prevSlide" 
            class="control-btn prev"
            aria-label="Previous"
          >
            <span class="arrow">‹</span>
          </button>
          <button 
            @click="nextSlide" 
            class="control-btn next"
            aria-label="Next"
          >
            <span class="arrow">›</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from "@/assets/testimonials.json";

export default {
  name: "TestimonialsCarousel",
  data() {
    return {
      testimonials: testimonials,
      currentIndex: 0,
      cardWidth: 300, // Match your CSS card width
      visibleCards: 1, // Number of cards visible at once
    };
  },
  computed: {
    trackStyle() {
      const offset = -(this.currentIndex * this.cardWidth);
      return {
        transform: `translateX(${offset}px)`,
        width: `${this.testimonials.length * this.cardWidth}px`
      };
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    getImgPath(photo) {
      return new URL(`../assets/photos/${photo}`, import.meta.url).href;
      
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 30px;
}

.testimonial-card {
  flex: 0 0 300px;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: 0.5;
  transform: scale(0.9);
}

.testimonial-card.active {
  opacity: 1;
  transform: scale(1);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 3px solid #4CAF50;
}

.user-name {
  font-size: 1.2rem;
  margin-bottom: 4px;
  color: #333;
}

.user-role {
  font-size: 0.9rem;
  color: #666;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
  font-style: italic;
}

.rating {
  color: #FFD700;
  font-size: 1.4rem;
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.control-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
}

.control-btn.prev {
  left: 0;
}

.control-btn.next {
  right: 0;
}

.arrow {
  font-size: 2rem;
  color: #4CAF50;
  line-height: 1;
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 0 30px;
  }
  
  .testimonial-card {
    flex: 0 0 280px;
  }
  
  .control-btn {
    width: 40px;
    height: 40px;
  }
}
</style>