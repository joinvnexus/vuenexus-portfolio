<template>
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="logo" @click="GoHome">
        <img src="../assets/logo.svg" alt=" Logo" class="logo-img" @click="GoHome" />
      </div>

      <!-- Navigation and CV Button -->
      <div class="nav-container">
        <!-- Navigation Links -->
        <nav class="nav" :class="{ open: isMenuOpen }">
          <ul>
            <li><a href="#hero" @click="smoothScroll('#hero'); closeMenu()">Home</a></li>
            <li><a href="#about" @click="smoothScroll('#about'); closeMenu()">About</a></li>
            <li><a href="#portfolio" @click="smoothScroll('#portfolio'); closeMenu()">Portfolio</a></li>
            <!-- <li><a href="#contact" @click="smoothScroll('#contact'); closeMenu()">Contact</a></li> -->
            <li><a href="#blog" @click="smoothScroll('#blog'); closeMenu()">Blog</a></li>
            <li><a href="#services" @click="smoothScroll('#services'); closeMenu()">Services</a></li>
            <li><a href="#testimonials" @click="smoothScroll('#testimonials'); closeMenu()">Testimonials</a></li>
          </ul>
        </nav>


      </div>
      <!--Get in Touch -->
      <div class="gettouch">
        <button @click="$emit('contact', '#contact')" class="touch-btn">Get in Touch</button>
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
      GoHome() {
        this.$router.push('/');
      },
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
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
 /* background: linear-gradient(175deg, #3e4c53, #48d165); */
  /* background-color: #3e4c53; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50px;
}
.logo img {
  margin-top: 20px;
  width: 25vw;
  height: auto;
  cursor: pointer;
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
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.8s;
}

.nav ul li a:hover {
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color: #48d165; */
}
.gettouch {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gettouch .touch-btn {
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.7px;
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  /* margin-left: 20px; */
}
.gettouch .touch-btn:hover {
  background: linear-gradient(45deg, #4CAF50, #2196F3);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(20, 217, 252, 0.74);
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
  width: 50px;

}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
  z-index: 999;
  width: 50px;
  
}

@media (max-width: 768px) {
  .header {
    padding-top: 0;
  }
  .container {
    padding: 15px;
    /*background-color: #3e4c53;*/
  }

  .logo {
    height: 50px;
    margin-left: -45px;
  }

  .logo .logo-img{
    width: 60vw;
    height: auto;
    /* margin-left: -45px; */
  }
  .hamburger {
    display: flex;
    z-index: 999;
    margin-right: 20px;
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
    height: 600px;
    width: 100%;
    background:rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
    z-index: 999;

  }

  .nav ul {
    flex-direction: column;
    margin-right: 20px;
  }

  .nav ul li {
    margin: 8px 0;
    text-align: center;
  }

  .nav ul li a {
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;
  }

  .gettouch {
    display: none;
    /* Hide CV button on smaller screens */
  }
}
</style>