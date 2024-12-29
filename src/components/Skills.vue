<template>
    <section id="skills" class="skills-section">
      <div class="container">
        <!-- Section Title -->
        <h2 class="section-title" data-aos="fade-up">Skills & Expertise</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          A glimpse of the technologies I specialize in
        </p>
  
        <!-- Skill Categories -->
        <div class="skills-wrapper">
          <!-- Frontend Skills -->
          <div class="skills-category" data-aos="fade-right">
            <h3>Frontend Development</h3>
            <ul>
              <li>
                <span class="skill-name">HTML</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 90%;" data-tooltip="Expert level in HTML"></div>
                </div>
              </li>
              <li>
                <span class="skill-name">CSS</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 85%;" data-tooltip="Proficient in responsive design"></div>
                </div>
              </li>
              <li>
                <span class="skill-name">JavaScript</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 80%;" data-tooltip="Skilled in modern JavaScript (ES6+)"></div>
                </div>
              </li>
              <li>
                <span class="skill-name">Vue.js</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 75%;" data-tooltip="Experienced in Vue.js framework"></div>
                </div>
              </li>
            </ul>
          </div>
  
          <!-- WordPress Skills -->
          <div class="skills-category" data-aos="fade-left">
            <h3>WordPress Development</h3>
            <ul>
              <li>
                <span class="skill-name">Custom Themes</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 85%;" data-tooltip="Experienced in creating custom themes"></div>
                </div>
              </li>
              <li>
                <span class="skill-name">Plugins</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 70%;" data-tooltip="Familiar with custom plugin development"></div>
                </div>
              </li>
              <li>
                <span class="skill-name">SEO Optimization</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 75%;" data-tooltip="Proficient in SEO-friendly WordPress setups"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Skills",
  };
  </script>
  
  <style scoped>
  .skills-section {
    padding: 60px 20px;
    background-color: #f9f9f9;
  }
  .section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .section-subtitle {
    text-align: center;
    font-size: 1rem;
    color: #666;
    margin-bottom: 40px;
  }
  .skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  .skills-category {
    flex: 1 1 45%;
  }
  .skills-category h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .skills-category ul {
    list-style: none;
    padding: 0;
  }
  .skills-category li {
    margin-bottom: 20px;
  }
  .skill-name {
    display: inline-block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .progress-bar {
    width: 100%;
    background: #ddd;
    height: 10px;
    border-radius: 5px;
    position: relative;
  }
  .progress {
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #81c784);
    border-radius: 5px;
    position: relative;
  }
  .progress:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    top: -25px;
    left: 0;
    right: 0;
    background: #333;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
  }
  </style>
  