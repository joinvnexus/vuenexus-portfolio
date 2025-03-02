<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <!-- Section Title -->
      <h2 class="section-title" data-aos="fade-up">Skills & Expertise</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        A quick look at the technologies I specialize in
      </p>

      <!-- Skill Categories -->
      <div class="skills-wrapper">
        <!-- Frontend Skills -->
        <div class="skills-category" data-aos="fade-right">
          <h3 class="category-title">Frontend Development</h3>
          <ul class="skills-list">
            <li>
              <div class="skill">
                <i class="fas fa-code"></i>
                <span class="skill-name">HTML</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 90%;" data-tooltip="Expert level in HTML"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="skill">
                <i class="fas fa-paint-brush"></i>
                <span class="skill-name">CSS</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 85%;" data-tooltip="Proficient in responsive design"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="skill">
                <i class="fas fa-cogs"></i>
                <span class="skill-name">JavaScript</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 80%;" data-tooltip="Skilled in modern JavaScript (ES6+)"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="skill">
                <i class="fab fa-vuejs"></i>
                <span class="skill-name">Vue.js</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 75%;" data-tooltip="Experienced in Vue.js framework"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <!-- WordPress Skills -->
        <div class="skills-category" data-aos="fade-left">
          <h3 class="category-title">WordPress Development</h3>
          <ul class="skills-list">
            <li>
              <div class="skill">
                <i class="fas fa-themeisle"></i>
                <span class="skill-name">Custom Themes</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 85%;" data-tooltip="Experienced in creating custom themes"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="skill">
                <i class="fas fa-plug"></i>
                <span class="skill-name">Plugins</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 70%;" data-tooltip="Familiar with custom plugin development"></div>
                </div>
              </div>
            </li>
            <li>
              <div class="skill">
                <i class="fas fa-search"></i>
                <span class="skill-name">SEO Optimization</span>
                <div class="progress-bar">
                  <div class="progress" style="width: 75%;" data-tooltip="Proficient in SEO-friendly WordPress setups"></div>
                </div>
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
  padding: 60px 30px;
  background-color: #f9f9f9;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
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
  gap: 40px;
}
.skills-category {
  flex: 1 1 45%;
}
.category-title {
  font-size: 1.5rem;
  padding-left:20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
  text-align: left;
}
.skills-list {
  list-style: none;
  padding: 20px;
}
.skills-list li {
  margin-bottom: 30px;
}
.skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.skill i {
  font-size: 1.5rem;
  color: #4caf50;
  margin-right: 10px;
}
.skill-name {
  flex-grow: 1;
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
}
.progress-bar {
  width: 60%;
  background: #ddd;
  height: 8px;
  border-radius: 5px;
  position: relative;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #81c784);
  border-radius: 5px;
  position: relative;
  transition: width 1s ease-in-out;
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
}

/* Responsive Design */
@media (max-width: 768px) {
  hr{
    display:none;
  }
  .section-title {
    font-size: 1.8rem;
  }
  .section-subtitle {
    font-size: 0.9rem;
  }
  .skills-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .skills-category {
    flex: 1 1 100%;
    margin-bottom: 30px;
  }
  .category-title {
    font-size: 1.3rem;
  }
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .skills-list li {
    flex: 1 1 48%;
    margin-bottom: 20px;
  }
  .skill-name {
    font-size: 1rem;
  }
  .progress-bar {
    width: 80%;
  }
}

/* Mobile-First Layout */
@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  .section-subtitle {
    font-size: 0.85rem;
  }
  .skill i {
    font-size: 1.3rem;
  }
  .skill-name {
    font-size: 0.9rem;
  }
  .progress-bar {
    width: 90%;
  }
}
</style>
