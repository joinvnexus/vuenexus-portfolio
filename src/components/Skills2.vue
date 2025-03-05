<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <!-- Controls -->
      <div class="skills-controls">
        <div class="search-filter">
          <input v-model="searchQuery" type="text" placeholder="Search skills..." class="search-input" />
          <div class="category-filters">
            <button v-for="category in categories" :key="category" @click="activeCategory = category"
              :class="{ active: activeCategory === category }">
              {{ category }}
            </button>
          </div>
        </div>

        <div class="visualization-toggle">
          <button @click="viewMode = viewMode === 'list' ? 'sphere' : 'list'">
            {{ viewMode === 'list' ? '3D View' : 'List View' }}
          </button>
        </div>
      </div>

      <!-- 3D Sphere Visualization -->
      <div v-show="viewMode === 'sphere'" class="skill-sphere-container">
        <canvas ref="sphereCanvas" class="skill-sphere"></canvas>
        <div class="sphere-info" v-if="selectedSkill">
          <h3>{{ selectedSkill.name }}</h3>
          <p>{{ selectedSkill.description }}</p>
          <div class="skill-progress">
            <div class="progress-bar">
              <div :style="{
                width: selectedSkill.percent + '%',
                backgroundColor: getLevelColor(selectedSkill.percent)
              }"></div>
            </div>
            <button @click="addEndorsement(selectedSkill)">
              👍 {{ selectedSkill.endorsements }}
            </button>
          </div>
        </div>
      </div>

      <!-- List/Grid View -->
      <div v-show="viewMode === 'list'" class="skills-grid">
        <div v-for="(skill, index) in filteredSkills" :key="index" class="skill-card"
          :class="[`level-${getLevel(skill.percent)}`]">
          <div class="skill-header" @click="toggleSkillDetail(skill)">
            <img :src="skill.badge" :alt="skill.name + ' badge'" class="skill-badge" />
            <div class="skill-meta">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <div class="skill-progress">
                <span class="skill-percent">{{ skill.percent }}%</span>
                <div class="progress-bar">
                  <div :style="{
                    width: skill.percent + '%',
                    backgroundColor: getLevelColor(skill.percent)
                  }"></div>
                </div>
              </div>
            </div>
            <button class="endorse-btn" @click.stop="addEndorsement(skill)">
              👍 {{ skill.endorsements }}
            </button>
          </div>

          <transition name="expand">
            <div v-if="expandedSkill === skill.id" class="skill-details">
              <div class="detail-section">
                <h4>Certification</h4>
                <p>{{ skill.certification }}</p>
                <small>Issued: {{ skill.certificationDate }}</small>
              </div>

              <div class="detail-section">
                <h4>Related Skills</h4>
                <div class="dependency-map">
                  <span v-for="dep in skill.dependencies" :key="dep" class="dependency">
                    {{ dep }}
                  </span>
                </div>
              </div>

              <div class="detail-section">
                <h4>Progress History</h4>
                <div class="timeline">
                  <div v-for="(entry, tIndex) in skill.history" :key="tIndex" class="timeline-entry">
                    <div class="timeline-date">{{ entry.date }}</div>
                    <div class="timeline-content">{{ entry.description }}</div>
                  </div>
                </div>
              </div>

              <div class="detail-section">
                <h4>Skill Quiz</h4>
                <div class="skill-quiz">
                  <div v-for="(question, qIndex) in skill.questions" :key="qIndex" class="quiz-question">
                    <p>{{ question.text }}</p>
                    <div class="quiz-options">
                      <button v-for="(option, oIndex) in question.options" :key="oIndex"
                        @click="checkAnswer(question, option)" :class="{
                          correct: option.correct,
                          selected: selectedAnswers[question.id] === option.id
                        }">
                        {{ option.text }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TagCloud from 'TagCloud';
  import { ref } from 'vue';
  import vueBadge from '../assets/badges/vue-badge.svg';
  import htmlBadge from '../assets/badges/html-badge.svg';
  import jsBadge from '../assets/badges/js-badge.svg';
  import cssBadge from '../assets/badges/css-badge.svg';
  import wordPressBadge from '../assets/badges/wordpress-badge.svg';
  import elemantorBadge from '../assets/badges/elementor-badge.svg';
  import scssBadge from '../assets/badges/scss-badge.svg';
  import tailwindBadge from '../assets/badges/tailwind-badge.svg';
  import vuexBadge from '../assets/badges/vuex-badge.svg';
  import woocommerceBadge from '../assets/badges/woocommerce-badge.svg';
  import githubBadge from '../assets/badges/git-badge.svg';
  export default {
    name: 'SuperSkills',
    data() {
      return {
        viewMode: 'list',
        searchQuery: '',
        activeCategory: 'all',
        expandedSkill: null,
        selectedSkill: null,
        selectedAnswers: {},
        categories: ['all', 'frontend', 'backend', 'design', 'devops'],
        skills: [
          {
            id: 1,
            name: 'Vue.js',
            percent: 85,
            category: 'frontend',
            endorsements: 12,
            badge: vueBadge,
            certification: 'Vue Mastery Certification',
            certificationDate: '2023-01-15',
            dependencies: ['JavaScript', 'HTML', 'CSS'],
            history: [
              { date: '2022-03', description: 'Started learning Vue 3' },
              { date: '2022-09', description: 'First production project' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is Vuex used for?',
                options: [
                  { id: 1, text: 'State management', correct: true },
                  { id: 2, text: 'Routing', correct: false }
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'WordPress',
            percent: 75,
            category: 'frontend',
            endorsements: 8,
            badge: wordPressBadge,
            certification: 'WordPress Expert Certification',
            certificationDate: '2023-03-05',
            dependencies: ['PHP', 'MySQL', 'HTML', 'CSS'],
            history: [
              { date: '2021-05', description: 'Started learning WordPress' },
              { date: '2022-06', description: 'Built my first WordPress theme' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is a WordPress plugin?',
                options: [
                  { id: 1, text: 'A software add-on to extend WordPress functionality', correct: true },
                  { id: 2, text: 'A visual template for themes', correct: false }
                ]
              }
            ]
          },
          {
            id: 3,
            name: 'Elementor',
            percent: 80,
            category: 'frontend',
            endorsements: 6,
            badge: elemantorBadge,
            certification: 'Elementor Certified Expert',
            certificationDate: '2023-04-15',
            dependencies: ['WordPress', 'HTML', 'CSS'],
            history: [
              { date: '2022-07', description: 'Started using Elementor for design' },
              { date: '2023-01', description: 'Built a custom page layout with Elementor' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is Elementor used for?',
                options: [
                  { id: 1, text: 'Drag-and-drop page builder for WordPress', correct: true },
                  { id: 2, text: 'WordPress hosting platform', correct: false }
                ]
              }
            ]
          },
          {
            id: 4,
            name: 'SCSS',
            percent: 85,
            category: 'frontend',
            endorsements: 10,
            badge: scssBadge,
            certification: 'SCSS Mastery Certification',
            certificationDate: '2023-02-18',
            dependencies: ['CSS'],
            history: [
              { date: '2021-08', description: 'Started learning SCSS' },
              { date: '2022-01', description: 'First SCSS project' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is SCSS?',
                options: [
                  { id: 1, text: 'Sassy CSS, an extension of CSS with more features', correct: true },
                  { id: 2, text: 'A new CSS framework', correct: false }
                ]
              }
            ]
          },
          {
            id: 5,
            name: 'Tailwind CSS',
            percent: 80,
            category: 'frontend',
            endorsements: 11,
            badge: tailwindBadge,
            certification: 'Tailwind CSS Expert Certification',
            certificationDate: '2023-03-22',
            dependencies: ['CSS'],
            history: [
              { date: '2021-11', description: 'Started using Tailwind for design' },
              { date: '2022-02', description: 'Created a landing page using Tailwind' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is Tailwind CSS?',
                options: [
                  { id: 1, text: 'Utility-first CSS framework', correct: true },
                  { id: 2, text: 'CSS preprocessor', correct: false }
                ]
              }
            ]
          },
          {
            id: 6,
            name: 'JavaScript',
            percent: 75,
            category: 'frontend',
            endorsements: 15,
            badge: jsBadge,
            certification: 'JavaScript Mastery Certification',
            certificationDate: '2023-05-15',
            dependencies: ['HTML', 'CSS'],
            history: [
              { date: '2021-03', description: 'Started learning JavaScript' },
              { date: '2022-06', description: 'First JavaScript-based project' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is a closure in JavaScript?',
                options: [
                  { id: 1, text: 'A function that has access to variables defined outside of it', correct: true },
                  { id: 2, text: 'A function that has access to variables defined inside it', correct: false }
                ]
              }
            ]
          },
          {
            id: 7,
            name: 'Vuex',
            percent: 75,
            category: 'frontend',
            endorsements: 9,
            badge: vuexBadge,
            certification: 'Vuex Expert Certification',
            certificationDate: '2023-06-12',
            dependencies: ['Vue.js', 'JavaScript'],
            history: [
              { date: '2022-09', description: 'Started learning Vuex' },
              { date: '2023-02', description: 'Used Vuex in production project' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is Vuex used for?',
                options: [
                  { id: 1, text: 'State management in Vue applications', correct: true },
                  { id: 2, text: 'Component lifecycle management', correct: false }
                ]
              }
            ]
          },
          {
            id: 8,
            name: 'CSS',
            percent: 95,
            category: 'frontend',
            endorsements: 20,
            badge: cssBadge,
            certification: 'CSS Mastery Certification',
            certificationDate: '2023-07-05',
            dependencies: [],
            history: [
              { date: '2020-06', description: 'Started learning CSS' },
              { date: '2021-09', description: 'Completed CSS-based web design projects' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is the CSS box model?',
                options: [
                  { id: 1, text: 'Defines the layout and padding of elements', correct: true },
                  { id: 2, text: 'Controls text styles within an element', correct: false }
                ]
              }
            ]
          },
          {
            id: 9,
            name: 'WooCommerce',
            percent: 80,
            category: 'frontend',
            endorsements: 7,
            badge: woocommerceBadge,
            certification: 'WooCommerce Expert Certification',
            certificationDate: '2023-06-20',
            dependencies: ['WordPress', 'PHP'],
            history: [
              { date: '2021-10', description: 'Started building WooCommerce websites' },
              { date: '2022-12', description: 'Built a full-featured e-commerce store using WooCommerce' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is WooCommerce?',
                options: [
                  { id: 1, text: 'An e-commerce plugin for WordPress', correct: true },
                  { id: 2, text: 'A WordPress theme', correct: false }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'Git & GitHub',
            percent: 85,
            category: 'frontend',
            endorsements: 14,
            badge: githubBadge,
            certification: 'Git Mastery Certification',
            certificationDate: '2023-01-25',
            dependencies: ['JavaScript', 'HTML'],
            history: [
              { date: '2021-07', description: 'Started learning Git' },
              { date: '2022-05', description: 'Contributed to open-source projects' }
            ],
            questions: [
              {
                id: 1,
                text: 'What is Git?',
                options: [
                  { id: 1, text: 'A version control system', correct: true },
                  { id: 2, text: 'A package manager', correct: false }
                ]
              }
            ]
          },

          {
            id: 11,
            name: 'HTML',
            percent: 95,
            category: 'frontend',
            endorsements: 22,
            badge: htmlBadge,
            certification: 'HTML Mastery Certification',
            certificationDate: '2023-07-10',
            dependencies: [],
            history: [
              { date: '2020-05', description: 'Started learning HTML' },
              { date: '2021-08', description: 'Built multiple websites with HTML' }
            ],
            questions: [
              {
                id: 1,
                text: 'What does HTML stand for?',
                options: [
                  { id: 1, text: 'HyperText Markup Language', correct: true },
                  { id: 2, text: 'High-Level Text Language', correct: false }
                ]
              }
            ]
          }
        ]
      
        

      };
    },
    computed: {
      filteredSkills() {
        return this.skills.filter(skill => {
          const matchesSearch = skill.name.toLowerCase().includes(
            this.searchQuery.toLowerCase()
          );
          const matchesCategory = this.activeCategory === 'all' ||
            skill.category === this.activeCategory;
          return matchesSearch && matchesCategory;
        });
      }
    },
    methods: {
      getLevelColor(percent) {
        return percent >= 80 ? '#4CAF50' :
          percent >= 60 ? '#FFC107' :
            '#F44336';
      },
      getLevel(percent) {
        return percent >= 80 ? 'expert' :
          percent >= 60 ? 'intermediate' :
            'beginner';
      },
      addEndorsement(skill) {
        skill.endorsements++;
      },
      toggleSkillDetail(skill) {
        this.expandedSkill = this.expandedSkill === skill.id ? null : skill.id;
      },
      checkAnswer(question, option) {
        this.$set(this.selectedAnswers, question.id, option.id);
      },
      initSphere() {
        const texts = this.filteredSkills.map(skill => skill.name);
        const options = {
          radius: 300,
          maxSpeed: 'fast',
          onClick: (tag) => {
            this.selectedSkill = this.skills.find(s => s.name === tag);
          }
        };

        if (this.sphereInstance) {
          this.sphereInstance.destroy();
        }

        this.sphereInstance = TagCloud(this.$refs.sphereCanvas, texts, options);
      }
    },
    watch: {
      filteredSkills() {
        if (this.viewMode === 'sphere') {
          this.initSphere();
        }
      },
      viewMode(newVal) {
        if (newVal === 'sphere') {
          this.$nextTick(this.initSphere);
        }
      }
    },
    mounted() {
      if (this.viewMode === 'sphere') {
        this.initSphere();
      }
    }
  };
</script>


<style scoped>
/* Base Styles */
.skills-section {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Typography */
.section-title {
  text-align: center;
  font-size: 2.75rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1.5rem;
  letter-spacing: -0.05em;
}

.section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

/* Controls */
.skills-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  max-width: 400px;
  padding: 0.875rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.category-filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.category-filters button {
  margin-top: 0.8rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.category-filters button.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.visualization-toggle button {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.visualization-toggle button:hover {
  transform: translateY(-1px);
}

/* 3D Sphere */
.skill-sphere-container {
  position: relative;
  height: 600px;
  margin: 2rem 0;
}

.skill-sphere {
  width: 100%;
  height: 100%;
}

.sphere-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  backdrop-filter: blur(10px);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  position: relative;
}

.skill-card {
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f1f5f9;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Skill Header */
.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
}

.skill-badge {
  width: 46px;
  height: 46px;
  
  object-fit: contain;
  flex-shrink: 0;
}

.skill-meta {
  flex: 1;
}

.skill-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.skill-percent {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.progress-bar {
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar div {
  height: 100%;
  border-radius: 4px;
  position: relative;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  from {
    width: 0;
  }

  to {
    width: var(--target-width);
  }
}

.endorse-btn {
  background: #f1f5f9;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.endorse-btn:hover {
  background: #3b82f6;
  color: white;
}

/* Skill Details */
.skill-details {
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
  margin-top: 1rem;
}

.detail-section {
  margin-bottom: 2rem;
}

.detail-section h4 {
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 700;
}

.dependency-map {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.dependency {
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #64748b;
}

.timeline-entry {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.timeline-entry::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
}

.timeline-date {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.timeline-content {
  font-size: 0.95rem;
  color: #475569;
}

/* Quiz Styles */
.quiz-question {
  margin-bottom: 1.5rem;
}

.quiz-options {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

.quiz-options button {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quiz-options button:hover {
  border-color: #3b82f6;
  background: #f8fafc;
}

.quiz-options button.correct {
  border-color: #4CAF50;
  background: #f0fdf4;
}

.quiz-options button.selected:not(.correct) {
  border-color: #ef4444;
  background: #fef2f2;
}

/* Animations */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }

  .skills-controls {
    flex-direction: column;
  }

  .search-input {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 3rem;
  }

  .skill-sphere-container {
    height: 400px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .skill-card {
    padding: 1rem;
    border-radius: 1rem;
  }

  .skill-header {
    gap: 0.75rem;
  }

  .skill-badge {
    width: 48px;
    height: 48px;
  }

  .endorse-btn {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>