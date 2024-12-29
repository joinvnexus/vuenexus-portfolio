<template>
  <section class="about" id="about">
    <div class="container">
      <!-- Image Section -->
      <div class="about-image" data-aos="fade-right">
        <img src="https://via.placeholder.com/400x400" alt="About Me" />
      </div>

      <!-- Content Section -->
      <div class="about-content" data-aos="fade-left">
        <h2>About Me</h2>
        <p class="subtitle">A Glimpse Into Who I Am</p>
        <p class="description">
          Hi, I'm <span class="highlight">[Your Name]</span>, a passionate <span class="highlight">Frontend Developer</span> with a knack for creating user-centric designs and seamless web experiences. I have expertise in building responsive, modern websites and a deep love for crafting visually appealing and functional user interfaces.
        </p>
        <p class="description">
          When I'm not coding, you can find me exploring new technologies, sketching creative ideas, or solving puzzles to keep my problem-solving skills sharp.
        </p>
        <!-- Skills and CTA -->
        <div class="skills">
          <p><strong>Skills:</strong> Vue.js, HTML, CSS, JavaScript, WordPress, Responsive Design, and more.</p>
        </div>
        <button class="btn-primary" @click="$emit('smoothScroll', '#portfolio')">View My Work</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* About Section */
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  background-color: #f9f9f9;
  color: #333;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

/* Image Section */
.about-image {
  flex: 1;
  max-width: 500px;
  margin-right: 20px;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Content Section */
.about-content {
  flex: 1;
  max-width: 600px;
  text-align: left;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.about-content .subtitle {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 20px;
}

.about-content .description {
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #666;
}

.about-content .highlight {
  color: #ff5722;
  font-weight: bold;
}

/* Skills Section */
.skills {
  margin-bottom: 30px;
  font-size: 1rem;
  color: #555;
}

/* Button */
.btn-primary {
  padding: 12px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background-color: #388e3c;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .about-content {
    text-align: center;
  }
}
</style>

