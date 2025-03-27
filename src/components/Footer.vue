<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Brand Column -->
      <div class="footer-brand">
        <div class="logo-container" @click="scrollToTop">
          <img src="@/assets/logo.svg" alt="CmsTechy Logo" class="footer-logo">
        </div>
        <p class="brand-tagline">
    We build fast, beautiful, and scalable websites using Vue.js, WordPress, WooCommerce, Shopify, and Tailwind CSS—helping brands create standout digital experiences that drive success.
</p>

        <div class="social-links">
          <a v-for="social in socialLinks" :key="social.name" 
             :href="social.url" 
             target="_blank"
             class="social-icon"
             :aria-label="social.name">
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>

      <!-- Navigation Columns -->
      <div class="footer-nav">
        <div class="nav-column">
          <h4 class="column-title">Navigation</h4>
          <ul>
            <li v-for="link in navLinks" :key="link.text">
              <router-link :to="link.path" class="nav-link" @click="scrollToSection(link.path)">
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="nav-column">
          <h4 class="column-title">Services</h4>
          <ul class="services-list">
            <li v-for="service in services" :key="service">
              <a href="#services" class="nav-link" @click="scrollToSection('#services')">
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <div class="nav-column">
          <h4 class="column-title">Contact</h4>
          <ul class="contact-info">
            <li>
              <i class="fas fa-envelope"></i>
              <span>projoydevlab@gmail.com</span>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Sylhet, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright Section -->
    <div class="footer-bottom">
      <div class="copyright">
        &copy; {{ currentYear }} VueNexus. All Rights Reserved
      </div>
      <div class="legal-links">
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/terms">Terms of Service</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ModernFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/projoy-Vue' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/vuenexus/' },
        { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/joinvnexus' },
        { name: 'Dribbble', icon: 'fab fa-dribbble', url: 'https://dribbble.com/joinvnexus' }
      ],
      navLinks: [
        { text: 'Home', path: '#home' },
        { text: 'About', path: '#about' },
        { text: 'Portfolio', path: '#portfolio' },
        { text: 'Blog', path: '#blog' },
        { text: 'Contact', path: '#contact' }
      ],
      services: [
        'Web Development',
        'UI/UX Design',
        'Vue Consulting',
        'Performance Optimization'
      ]
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollToSection(selector) {
      const section = document.querySelector(selector);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.footer {
  width: 100%;
  background-color: #1a1a2e;
  color: #e6e6e6;
  padding: 60px 0 0;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  cursor: pointer;
}

.footer-logo {
  margin-left: -30px;
  height: 80px;
  width: auto;
  transition: transform 0.3s ease;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #42b983, #3baa76);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.brand-tagline {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: #a1a1a1;
  margin-bottom: 25px;
}

.social-links {
  display: flex;
  gap: 18px;
}

.social-icon {
  color: #a1a1a1;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #42b983;
  transform: translateY(-3px);
}

/* Navigation Section */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.nav-column {
  display: flex;
  flex-direction: column;
}

.column-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
}

.column-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #42b983;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.services-list{
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: #b3b3b3;
  font-size: 0.95rem;
  margin-bottom: 12px;
  display: inline-block;
  transition: all 0.3s ease;
  position: relative;
}

 .nav-link:hover{
  list-style-type: circle;
  color: #42b983;
  transform: translateX(5px);
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #b3b3b3;
  font-size: 0.95rem;
}

.contact-info i {
  color: #42b983;
  width: 20px;
  text-align: center;
}

/* Footer Bottom */
.footer-bottom {
  margin-top: 60px;
  padding: 20px 10px;
  border-top: 1px solid #2a2a3a;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 0.85rem;
  color: #8a8a8a;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  color: #8a8a8a;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #42b983;
}

/* Responsive Design */
@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-nav {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>