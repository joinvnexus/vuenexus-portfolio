<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section-title" data-aos="fade-up">What People Say</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Hear from my clients and colleagues about their experiences.
      </p>

      <!-- Testimonials Carousel -->
      <div class="testimonials-carousel" data-aos="fade-up" data-aos-delay="200">
        <div
          class="testimonial-cards-wrapper"
          :style="{ transform: `translateX(-${currentTestimonial * 33.33}%)` }"
        >
          <div
            class="testimonial-card"
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
          >
            <div class="testimonial-photo">
              <!-- <img :src="`/assets/photos/${testimonial.photo}`" :alt="testimonial.name" /> -->
              
            </div>
            <div class="testimonial-content">
              <p class="testimonial-feedback">"{{ testimonial.feedback }}"</p>
              <h4 class="testimonial-name">{{ testimonial.name }}</h4>
              <span class="testimonial-designation">{{ testimonial.designation }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Controls -->
        <div class="carousel-controls">
          <button @click="prevTestimonial" class="carousel-btn prev-btn">❮</button>
          <button @click="nextTestimonial" class="carousel-btn next-btn">❯</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import testimonials from "@/assets/testimonials.json";

export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: testimonials,
      currentTestimonial: 0,
      slideInterval: null,
    };
  },
  created() {
    this.startAutoSlide();
  },
  destroyed() {
    clearInterval(this.slideInterval);
  },
  methods: {
    prevTestimonial() {
      this.currentTestimonial =
        (this.currentTestimonial - 1 + this.testimonials.length / 3) %
        (this.testimonials.length / 3);
    },
    nextTestimonial() {
      this.currentTestimonial =
        (this.currentTestimonial + 1) % (this.testimonials.length / 3);
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000); // Auto-slide every 5 seconds
    },
  },
};
</script>

<style scoped>
.testimonials-section {
  padding: 60px 20px;
  background: #f4f4f9; /* Soft background */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
}

.section-subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 30px;
}

.testimonials-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 400px;
  margin-top: 30px;
}

.testimonial-cards-wrapper {
  display: flex;
  transition: transform 0.6s ease;
}

.testimonial-card {
  width: 33.33%; /* Three testimonials visible at once */
  margin: 0 15px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.testimonial-photo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.testimonial-feedback {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 15px;
  color: #555;
}

.testimonial-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.testimonial-designation {
  font-size: 1rem;
  color: #777;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-btn:hover {
  background-color: #388e3c;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
