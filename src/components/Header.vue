<template>
  <header class="navbar" :class="{ 'sticky': isSticky, 'menu-open': isMenuOpen }">
    <div class="container">
      <!-- Logo -->
      <div class="logo" @click="GoHome">
        <img src="../assets/logo.svg" alt="Logo" class="logo-img" />
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a 
              :href="item.target" 
              class="nav-link"
              @click="handleNavClick(item.target)"
              @mouseenter="hoverEffect(index)"
              @mouseleave="resetEffect"
            >
              {{ item.text }}
              <span class="underline" :class="{ 'active': activeIndex === index }"></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <button class="cta-button" @click="$emit('contact', '#contact')">
        Get in Touch
      </button>

      <!-- Mobile Menu Toggle -->
      <div class="mobile-menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide">
      <nav class="mobile-nav" v-if="isMenuOpen">
        <ul>
          <li v-for="(item, index) in navItems" :key="index">
            <a 
              :href="item.target" 
              class="nav-link"
              @click="handleNavClick(item.target)"
            >
              {{ item.text }}
            </a>
          </li>
          <li>
            <button class="cta-button mobile-cta" @click="$emit('contact', '#contact')">
              Get in Touch
            </button>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'EnhancedNavigation',
  data() {
    return {
      isSticky: false,
      isMenuOpen: false,
      activeIndex: null,
      navItems: [
        { text: 'Home', target: '#hero' },
        { text: 'About', target: '#about' },
        { text: 'Portfolio', target: '#portfolio' },
        { text: 'Blog', target: '#blog' },
        { text: 'Services', target: '#services' },
        { text: 'Testimonials', target: '#testimonials' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    GoHome() {
      this.$router.push('/')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleNavClick(target) {
      this.smoothScroll(target)
      this.closeMenu()
    },
    smoothScroll(targetId) {
      const target = document.querySelector(targetId)
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Adjust offset for fixed header height
          behavior: "smooth",
        })
      }
    },
    handleScroll() {
      this.isSticky = window.scrollY > 50
    },
    handleResize() {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.isMenuOpen = false
      }
    },
    hoverEffect(index) {
      this.activeIndex = index
    },
    resetEffect() {
      this.activeIndex = null
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.navbar {
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: relative;
  z-index: 1000;
  transition: all 0.3s ease;
}

.container {
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Styles */
.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;

  transition: transform 0.3s ease;
}

.logo-img {
  width: 20vw;
  height:auto;
  transition: transform 0.3s ease;
}

.logo:hover .logo-img {
  transform: scale(1.05);
}

/* Desktop Navigation */

.desktop-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.desktop-nav li {
  margin: 0 15px;
}

.nav-link {
  color: #f5f0f0;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 10px 0;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  transition: width 0.3s ease;
}

.underline.active {
  width: 100%;
}

/* CTA Button */
.cta-button {
  padding: 10px 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(20, 217, 252, 0.4);
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-menu-toggle span {
  height: 3px;
  width: 100%;
  background-color: #eceeec;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-top: 80px;
}

.mobile-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.mobile-nav li {
  margin: 20px 0;
}

.mobile-nav .nav-link {
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  display: block;
}

.mobile-cta {
  margin-top: 30px;
  width: 200px;
}

/* Sticky Header */
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

/* Slide Transition for Mobile Menu */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .cta-button:not(.mobile-cta) {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  position: relative;
    z-index: 1001;
  }

  .logo-img {
    width:35vw;
    height:auto;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  .logo-img {
    width: 40vw;
    height:auto;
  }
}
</style>