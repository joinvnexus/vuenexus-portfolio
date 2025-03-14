<template>
  <section class="about" id="about">
    <div class="container">
      <!-- Image Section -->
      <div class="about-image" data-aos="fade-right">
        <img :src="ImgUrl()" alt="About Me" />
      </div>

      <!-- Content Section -->
      <div class="about-content" data-aos="fade-left">
        <h2>About Me</h2>
        <p class="subtitle">A Glimpse Into Who I Am</p>
        <div class="description-container">
          <p class="description">
            Hi, I'm <span class="highlight">Projoy Naidu</span>, the creative mind behind <span class="highlight">VueNexus</span>. 
            As a passionate <strong>Frontend Developer</strong>, I specialize in building AI-powered, high-performance websites that are 
            visually stunning and functionally superior.
          </p>
          <p class="description">
            With expertise in <strong>Vue.js, WordPress, WooCommerce, Shopify, Tailwind,</strong> and more, I help businesses and agencies 
            create sleek, responsive, and user-friendly digital experiences that leave a lasting impact.
          </p>
        </div>

        <!-- Skills -->
        <div class="skills">
          <h3>Core Competencies</h3>
          <div class="skills-grid">
            <span class="skill-badge">Vue.js</span>
            <span class="skill-badge">HTML5/CSS3</span>
            <span class="skill-badge">JavaScript</span>
            <span class="skill-badge">WordPress</span>
            <span class="skill-badge">Responsive Design</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">150+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">98%</div>
            <div class="stat-label">Client Satisfaction</div>
          </div>
        </div>

        <!-- CTA Button -->
        <button class="btn-primary" @click="$emit('smoothScroll', '#portfolio')">
          <span>View My Work</span>
          <svg class="arrow-icon" viewBox="0 0 24 24">
            <path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import imgurl from '../assets/photos/Responsive WordPress E-commerce Design1.jpg'
export default {
  name: "AboutMe",
  data() {
    return {
      ImgUrl: () => imgurl
    };
  }
};
</script>

<style scoped>
/* Variables */
:root {
  --primary-color: #4CAF50;
  --secondary-color: #2196F3;
  --text-dark: #2c3e50;
  --text-medium: #666;
  --text-light: #888;
  --bg-light: #f9f9f9;
  --spacing-unit: 1rem;
  --border-radius: 12px;
  --transition-timing: 0.3s ease;
}

/* Base Styles */
.about {
  padding: 6rem 1rem;
  background-color: var(--bg-light);
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

/* Image Section */
.about-image {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform var(--transition-timing);
}

.about-image:hover {
  transform: translateY(-5px);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Content Section */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

}

h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-medium);
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-medium);
  margin-bottom: 1rem;
}

.highlight {
  color: var(--secondary-color);
  font-weight: 600;
}

/* Skills */
.skills {
  margin: 2rem 0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.skill-badge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: rgba(76, 175, 80, 0.1);
  color: var(--primary-color);
  border-radius: 2rem;
  font-weight: 500;
  transition: all var(--transition-timing);
}

.skill-badge:hover {
  background: var(--primary-color);
  color:var(--text-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  cursor:grab;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

.stat-card {
  padding: 1.5rem;
  background: rgba(76, 175, 80, 0.05);
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid rgba(76, 175, 80, 0.1);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--text-light);
}

/* Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all var(--transition-timing);
  margin-top: 1rem;
  z-index: 1;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
}

.arrow-icon {
  width: 1.2rem;
  height: 1.2rem;
  fill: currentColor;
  transition: transform var(--transition-timing);
}

.btn-primary:hover .arrow-icon {
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    gap: 3rem;
    padding: 0 2rem;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
 .container {
   flex-direction: column;
   width: 100%; 
   
 }

  .skill-badge {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .description {
    font-size: 1rem;
  }
}
</style>