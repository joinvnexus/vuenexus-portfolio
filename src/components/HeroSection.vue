<template>
    <section class="hero" id="hero">
      <div class="container">
        <!-- Content Section -->
        <div class="hero-content" data-aos="fade-up">
          <h1>Hello, I'm <span class="highlight">[Your Name]</span></h1>
          <p class="tagline">A Passionate <span class="highlight">Frontend Developer</span> Creating Modern Web Experiences</p>
          <p class="description">
            I specialize in crafting responsive, interactive, and visually stunning websites. Let’s build something amazing together.
          </p>
          <!-- CTA Buttons -->
          <div class="hero-buttons">
            <button class="btn-primary" @click="$emit('smoothScroll', '#contact')">Contact Me</button>
            <button class="btn-secondary" @click="$emit('smoothScroll', '#portfolio')">View Portfolio</button>
          </div>
        </div>
  
        <!-- Hero Illustration -->
        <div class="hero-illustration" data-aos="fade-left">
          <img src="https://picsum.photos/400/400" alt="Hero Illustration" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Hero",
    emits: ["smoothScroll" ],
  
  };
  </script>
  
  <style scoped>
  /* General Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Hero Section */
  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background: linear-gradient(135deg, #4caf50, #2c3e50);
    color: #fff;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
  }
  
  /* Content Section */
  .hero-content {
    flex: 1;
    max-width: 600px;
    margin-right: 20px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .hero-content .highlight {
    color: #ffd700;
  }
  
  .hero-content .tagline {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 15px;
  }
  
  .hero-content .description {
    font-size: 1rem;
    margin-bottom: 30px;
    line-height: 1.6;
    color: #ddd;
  }
  
  /* Buttons */
  .hero-buttons {
    display: flex;
    gap: 15px;
  }
  
  .btn-primary {
    padding: 12px 24px;
    font-size: 1rem;
    color: #fff;
    background-color: #ff5722;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #e64a19;
  }
  
  .btn-secondary {
    padding: 12px 24px;
    font-size: 1rem;
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .btn-secondary:hover {
    background-color: #fff;
    color: #333;
  }
  
  /* Illustration Section */
  .hero-illustration {
    flex: 1;
    max-width: 500px;
    text-align: center;
  }
  
  .hero-illustration img {
    width: 100%;
    max-width: 400px;
    border-radius: 50%;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero {
      margin-top: 60px;
      padding: 60px 20px;
      text-align: center;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
  
    .hero-content {
      margin-right: 0;
      margin-bottom: 20px;
    }
  
    .hero-illustration img {
      max-width: 300px;
    }
  }
  </style>
  