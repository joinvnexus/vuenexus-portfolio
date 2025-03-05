<template>
    <section id="skills" class="skills-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Skills & Expertise</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          A quick look at the technologies I specialize in
        </p>
  
        <div class="skills-grid">
          <!-- Frontend Skills -->
          <div class="skill-category" data-aos="fade-up">
            <div class="category-header">
              <svg class="category-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,18L17,12V7H7V12L12,18M12,4L2,20H22L12,4M12,8.5L16.5,14H13V17H11V14H7.5L12,8.5Z"/>
              </svg>
              <h3 class="category-title">Frontend Development</h3>
            </div>
            <div class="skills-container">
              <div 
                v-for="(skill, index) in frontendSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percent">{{ skill.percent }}%</span>
                </div>
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ width: skill.percent + '%' }"
                    :data-percent="skill.percent + '%'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- WordPress Skills -->
          <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
            <div class="category-header">
              <svg class="category-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.435 7.685l-6.05-4.773a2.117 2.117 0 00-2.77 0L4.565 7.685A2.117 2.117 0 004 9.265V19a2 2 0 002 2h12a2 2 0 002-2V9.265c0-.63-.298-1.222-.565-1.58zM12 17.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
              <h3 class="category-title">WordPress Development</h3>
            </div>
            <div class="skills-container">
              <div 
                v-for="(skill, index) in wordpressSkills"
                :key="index"
                class="skill-item"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percent">{{ skill.percent }}%</span>
                </div>
                <div class="progress-bar">
                  <div 
                    class="progress-fill" 
                    :style="{ width: skill.percent + '%' }"
                    :data-percent="skill.percent + '%'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Skills",
    data() {
      return {
        frontendSkills: [
          { name: "HTML", percent: 90 },
          { name: "CSS", percent: 85 },
          { name: "JavaScript", percent: 80 },
          { name: "Vue.js", percent: 75 }
        ],
        wordpressSkills: [
          { name: "Custom Themes", percent: 85 },
          { name: "Plugins", percent: 70 },
          { name: "SEO Optimization", percent: 75 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .skills-section {
    padding: 4rem 1rem;
    background: #f8fafc;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1e293b;
  }
  
  .section-subtitle {
    text-align: center;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .skill-category {
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .skill-category:hover {
    transform: translateY(-5px);
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .category-icon {
    width: 40px;
    height: 40px;
    color: #3b82f6;
  }
  
  .category-title {
    font-size: 1.5rem;
    color: #1e293b;
    margin: 0;
  }
  
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .skill-item {
    position: relative;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .skill-name {
    font-weight: 500;
    color: #334155;
  }
  
  .skill-percent {
    color: #64748b;
    font-size: 0.9rem;
  }
  
  .progress-bar {
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
  }
  
  .progress-fill {
    height: 100%;
    background: #3b82f6;
    border-radius: 4px;
    position: relative;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .progress-fill::after {
    content: attr(data-percent);
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  
    .section-title {
      font-size: 2rem;
    }
  
    .category-title {
      font-size: 1.3rem;
    }
  
    .skill-name {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 480px) {
    .skills-section {
      padding: 3rem 0.5rem;
    }
  
    .section-title {
      font-size: 1.75rem;
    }
  
    .section-subtitle {
      font-size: 1rem;
    }
  
    .category-header {
      gap: 0.75rem;
    }
  
    .category-icon {
      width: 32px;
      height: 32px;
    }
  }
  
  @keyframes progress {
    from { width: 0; }
    to { width: var(--target-width); }
  }
  </style>