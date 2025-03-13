<template>
  <section class="hero" id="hero">
    <!-- Animated gradient background -->
    <div class="hero-bg"></div>

    <div class="container">
      <!-- Content Section -->
      <div class="hero-content" data-aos="fade-up">
        <h1>Hey, I'm <span class="highlight">Projoy Naidu</span> 👋</h1>
        <p class="tagline">The Visionary Behind <span class="highlight">VueNexus</span>
          frontend developer specialized in WordPress, Vue.js, and AI-driven coding solutions.
          I help brands build sleek, responsive websites and dynamic eCommerce solutions.
        </p>
        <p class="description">
          With expertise in <strong>Vue.js, WordPress, WooCommerce, Shopify, and Tailwind</strong>,
        I craft <strong>AI-powered, high-performance web experiences</strong> that are both functional and visually stunning. 
        Let's build something exceptional together!
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons">
          <button class="btn-primary" @click="$emit('smoothScroll', '#contact')">
            <span>Contact Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </button>

          <button class="btn-secondary" @click="$emit('smoothScroll', '#portfolio')">
            <span>View Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Hero Illustration -->
      <div class="hero-illustration" data-aos="fade-left">
        <div class="image-wrapper">
          <img :src="ImgUrl()" alt="Projoy Naidu" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imgurl from '../assets/photos/projoy-naidu-vuenexus-frontend-developer-wordpress-expert.jpg'
export default {
  name: "HeroSection",
  data() {
    return {
      ImgUrl: () => imgurl
      // ImgUrl: require("../assets/photos/projoy-naidu-vuenexus-frontend-developer-wordpress-expert.jpg")
    }
  }
}
</script>

<style scoped>
/* Modern Gradient Background */
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  overflow: hidden;
  background: #0f172a;
  color: #ffffff;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg,
      #0f172a 30%,
      #1e3a8a 50%,
      #7c3aed 70%,
      #0f172a 90%);
  background-size: 400% 400%;
  animation: gradient-move 20s ease infinite;
  opacity: 0.8;
}

@keyframes gradient-move {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

/* Content Section Improvements */
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-content {
  flex: 1;
  max-width: 680px;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  color: #7c3aed;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hero-content:hover .highlight::after {
  transform: scaleX(1);
}

.tagline {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  margin-bottom: 1.5rem;
  color: #94a3b8;
}

.description {
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: #cbd5e1;
  max-width: 80%;
}
/* Updated Button Styles */
.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: none;
  cursor: pointer;
}

/* Primary Button - Slide Effect */
.btn-primary {
  background: linear-gradient(45deg, #7c3aed, #4f46e5);
  color: white;
  z-index: 1;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  transition: left 0.4s ease;
  z-index: -1;
}

.btn-primary:hover::before {
  left: 0;
}

.btn-primary:hover {
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
}

/* Secondary Button - Fill Effect */
.btn-secondary {
  background: transparent;
  color: #7c3aed;
  border: 2px solid #7c3aed;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: rgba(124, 58, 237, 0.1);
  transition: width 0.3s ease;
}

.btn-secondary:hover::before {
  width: 100%;
}

.btn-secondary:hover {
  color: #7c3aed;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.2);
}

/* Button Text Animation */
button span {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

button:hover span {
  transform: translateX(4px);
}

/* Button Icon */
button svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

button:hover svg {
  transform: translateX(3px);
}

/* Image Section */
.hero-illustration {
  flex: 1;
  max-width: 500px;
}

.image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.image-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg,
      transparent 0%,
      rgba(124, 58, 237, 0.1) 100%);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.image-wrapper:hover img {
  transform: scale(1.08);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
    padding: 4rem 1rem;
  }

  .description {
    max-width: 100%;
  }

  .hero-buttons {
    justify-content: center;
  }

  .image-wrapper {
    max-width: 320px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
  }

  button {
    width: 100%;
    justify-content: center;
  }
}
</style>