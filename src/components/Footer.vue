<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Logo Section -->
        <div class="footer-logo">
          <!-- <img src="@/assets/logo.svg" alt="Logo" class="footer-logo-img" /> -->
          <h3 class="footer-logo-text">CmsTechy</h3>
          <p class="footer-tagline">Creating Web Experiences with Vue.js</p>
        </div>
  
        <!-- Quick Links Section -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="#home" class="footer-link">Home</router-link></li>
            <li><router-link to="#about" class="footer-link">About</router-link></li>
            <li><router-link to="#services" class="footer-link">Services</router-link></li>
            <li><router-link to="#portfolio" class="footer-link">Portfolio</router-link></li>
            <li><router-link to="#blog" class="footer-link">Blog</router-link></li>
            <li><router-link to="#contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>
  
        <!-- Social Media Links -->
        <div class="footer-social">
          <h4>Follow Me</h4>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" class="social-link">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
  <hr>
      <!-- Footer Bottom Section -->
      <div class="footer-bottom">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    /* background: linear-gradient(135deg, #3498db, #8e44ad); */
    background: linear-gradient(135deg, #3e4c53, #48d165);
    color: #fff;
    padding: 4rem 2rem;
    text-align: center;
    border-top: 2px solid #fff;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 3rem;
  }
  
  .footer-logo {
    flex: 1 1 30%;
    text-align: left;
  }
  
  .footer-logo-text {
  
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f0f0f0;
    transition: transform 0.3s ease;
  }
  
  .footer-logo-text:hover {
    transform: scale(1.1);
  }
  
  .footer-tagline {
    font-size: 1.1rem;
    color: #f0f0f0;
  }
  
  .footer-links {
    flex: 1 1 30%;
  }
  
  .footer-links h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f0f0f0;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .footer-links li {
    margin-bottom: 1rem;
  }
  
  .footer-link {
    color: #f0f0f0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #f39c12;
  }
  
  .footer-social {
    flex: 1 1 30%;
  }
  
  .footer-social h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f0f0f0;
  }
  
  .footer-social ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .footer-social li {
    display: inline-block;
  }
  
  .social-link {
    color: #f0f0f0;
    font-size: 2rem;
    transition: color 0.3s ease, ;

  }
  
  .social-link:hover {
    color: #f39c12;
    transform: scale(1.2);
  }
  
  .social-link i {
    transition: transform 0.3s ease;
  }
  
  .social-link:hover i {
    transform: scale(1.2);
  }
  
  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid #f0f0f0;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #f0f0f0;
    font-weight: 300;
  }
  
  .footer-bottom p {
    color: #ddd;
  }
  
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  