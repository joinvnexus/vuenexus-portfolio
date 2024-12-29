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
            class="testimonial-card"
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :class="{ active: currentTestimonial === index }"
          >
            <div class="testimonial-photo">
              <img :src="`/assets/photos/${testimonial.photo}`" :alt="testimonial.name" />
            </div>
            <div class="testimonial-content">
              <p class="testimonial-feedback">"{{ testimonial.feedback }}"</p>
              <h4 class="testimonial-name">{{ testimonial.name }}</h4>
              <span class="testimonial-designation">{{ testimonial.designation }}</span>
            </div>
          </div>
  
          <!-- Navigation Controls -->
          <div class="carousel-controls">
            <button @click="prevTestimonial" class="carousel-btn">❮</button>
            <button @click="nextTestimonial" class="carousel-btn">❯</button>
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
        currentTestimonial: 0
      };
    },
    methods: {
      prevTestimonial() {
        // Show the previous testimonial
        this.currentTestimonial =
          (this.currentTestimonial - 1 + this.testimonials.length) %
          this.testimonials.length;
      },
      nextTestimonial() {
        // Show the next testimonial
        this.currentTestimonial =
          (this.currentTestimonial + 1) % this.testimonials.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .testimonials-section {
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
  .testimonials-carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
  }
  .testimonial-card {
    min-width: 100%;
    transition: transform 0.6s ease;
    opacity: 0;
    transform: translateX(100%);
    display: none;
    text-align: center;
  }
  .testimonial-card.active {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
  .testimonial-photo img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  .testimonial-feedback {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 10px;
    color: #333;
  }
  .testimonial-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .testimonial-designation {
    color: #666;
    font-size: 0.9rem;
  }
  .carousel-controls {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .carousel-btn {
    background: #4caf50;
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .carousel-btn:hover {
    background: #388e3c;
  }
  </style>
  