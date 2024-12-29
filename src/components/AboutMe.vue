<template>
    <section class="about" id="about">
      <div class="container">
        <!-- Image Section -->
        <div class="about-image" data-aos="fade-right">
          <img src="https://picsum.photos/400/400" alt="About Me" />
        </div>
  
        <!-- Content Section -->
        <div class="about-content" data-aos="fade-left">
          <h2>About Me</h2>
          <p class="subtitle">A Glimpse Into Who I Am</p>
          <p class="description">
            Hi, I'm <span class="highlight">[Your Name]</span>, a passionate <span class="highlight">Frontend Developer</span> with expertise in crafting responsive and visually stunning websites. I thrive on creating engaging digital experiences and bringing designs to life.
          </p>
          <p class="description">
            My journey is fueled by curiosity, creativity, and a drive to solve complex challenges through elegant code. Let's build something amazing together!
          </p>
  
          <!-- Skills Progress Bars -->
          <div class="skills">
            <h3>My Skills</h3>
            
            <p><strong> <span>Vue.js</span> <span>HTML&CSS</span> <span>JavaScript</span> <span>WordPress</span> <span>Responsive Design</span> </strong></p>
          
          </div>
  
          <!-- Animated SVG -->
          <div class="svg-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon"
              data-aos="zoom-in"
            >
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4h3V7h2v6h3l-4 4z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon"
              data-aos="zoom-in"
            >
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-4-4h3V7h2v6h3l-4 4z"
              />
            </svg>
          </div>
  
          <!-- Call to Action -->
          <button class="btn-primary" @click="$emit('smoothScroll', '#portfolio')">
            View My Work
          </button>
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
        margin-right: 30px;
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
  }
  
  .about-content h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #4caf50;
  }
  
  .subtitle {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1rem;
    margin-bottom: 20px;
    line-height: 1.6;
    color: #666;
  }
  
  .highlight {
    color: #ff5722;
    font-weight: bold;
  }
  
  /* Skills Progress Bars */
  .skills {
    margin: 30px 0;
  }
  
  .skills h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .skills p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #555;
  }
  
  .skills p strong {
    font-weight: 500;
  }
  
  .skills span {
    display: inline-block;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: #f0f0f0;
    color: #333;
    margin-top: 5px;
  }
  /* Animated SVG */
  .svg-icons {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    margin: 20px 0;
  }
  
  .svg-icons .icon {
    width: 50px;
    height: 50px;
    fill: #4caf50;
    transition: transform 0.3s;
  }
  
  .svg-icons .icon:hover {
    transform: scale(1.2);
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
      margin-bottom: 20px;
    }
  
    .about-content {
      text-align: center;
    }
  }
  </style>
  