<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <h1>CmsTechy</h1>
      </div>

      <!-- Navigation and CV Button -->
      <div class="nav-container">
        <!-- Navigation Links -->
        <nav class="nav" :class="{ open: isMenuOpen }">
          <ul>
            <li><a href="#hero" @click="smoothScroll('#hero'); closeMenu()">Home</a></li>
            <li><a href="#about" @click="smoothScroll('#about'); closeMenu()">About</a></li>
            <li><a href="#portfolio" @click="smoothScroll('#portfolio'); closeMenu()">Portfolio</a></li>
            <li><a href="#contact" @click="smoothScroll('#contact'); closeMenu()">Contact</a></li>
            <li><a href="#blog" @click="smoothScroll('#blog'); closeMenu()">Blog</a></li>
            <li><a href="#services" @click="smoothScroll('#services'); closeMenu()">Services</a></li>
            <li><a href="#testimonials" @click="smoothScroll('#testimonials'); closeMenu()">Testimonials</a></li>
          </ul>
        </nav>


      </div>
      <!-- CV Button -->
      <div class="cv">
        <input type="button" class="cv-btn" value="Download CV">
      </div>
      <!-- Hamburger Menu (for mobile) -->
      <div class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      smoothScroll(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70, // Adjust offset for fixed header height
            behavior: "smooth",
          });
        }
      },
    },
  };
</script>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding-top: 70px;
  /* Account for fixed header height */
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #3e4c53, #48d165);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo h1 {
  font-size: 1.8rem;
  color: #eceeec;
  font-weight: bold;
}

/* Navigation and CV Button Container */
.nav-container {
  display: flex;
  align-items: center;
 
  
}

.nav {
  display: flex;
  align-items: center;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  text-decoration: none;
  color: #f5f0f0;
  font-weight: 500;
  transition: color 0.3s;
}

.nav ul li a:hover {
  color: #48d165;
}

.cv {
  margin-left: 20px;
}

.cv-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.cv-btn:hover {
  background-color: #2c3e50;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  width: 100%;
  background-color: #eceeec;
  border-radius: 3px;
  transition: all 0.3s;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
  z-index: 999;
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
  z-index: 999;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav {
    display: none;
  }

  .nav.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background: #3e4c53;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .nav ul {
    flex-direction: column;
  }

  .nav ul li {
    margin: 20px 0;
  }

  .cv {
    display: none;
    /* Hide CV button on smaller screens */
  }
}
</style>
