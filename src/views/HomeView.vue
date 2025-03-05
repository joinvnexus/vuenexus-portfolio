<template>
  <div>

    <HeroSection  @smoothScroll="handleSmoothScroll" />
    <AboutMe @smoothScroll="handleSmoothScroll" />
    <Skills2 />
    <Portfolio />
    <Services/>
    <Testimonials/>
    <Blog/>
    <Contact />

  </div>
</template>

<script>

import HeroSection from '@/components/HeroSection.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills2 from '@/components/Skills2.vue';
import Portfolio from '@/components/Portfolio.vue';
import Services from '@/components/Services.vue';
import Testimonials from '@/components/Testimonials.vue';
import Blog from '@/components/Blog.vue';
import Contact from '@/components/Contact.vue';

export default {
  methods: {
    handleSmoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  components: {

    HeroSection,
    AboutMe,
    Skills2,
    Portfolio,
    Services,
    Testimonials,
    Blog,
    Contact,
  }
}


</script>

<style>


</style>
