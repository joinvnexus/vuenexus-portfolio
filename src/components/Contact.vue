<template>
  <section class="contact-section" id="contact">
    <h3 class="cta-title">Let's Create Something Amazing!</h3>
    <p class="cta-subtitle">Have a project in mind? Let's discuss how I can help you achieve your goals.</p>

    <div class="contact-container">
      <!-- Contact Form -->
      <form class="contact-form" @submit.prevent="handleSubmit" data-aos="fade-right">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="form.subject" placeholder="Subject" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit" class="btn-submit" :disabled="loading">
          {{ loading ? "Sending..." : "Send Message" }}
        </button>
      </form>

      <!-- Contact Info -->
      <div class="contact-info" data-aos="fade-left">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p><a href="https://maps.app.goo.gl/sZt319y95TVa4LJS6" target="_blank"> Sylhet, Bangladesh</a></p>
        </div>

        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>projoydevlab@gmail.com</p>
        </div>

        <div class="info-item">
          <i class="fas fa-phone-alt"></i>
          <p>+8801709-437619</p>
        </div>
        
        <!-- Google Map Embed Section -->
        <div class="map-container" data-aos="fade-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928753.7706231002!2d91.0543106264195!3d24.59111440754703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0x866f1ac20b3574a9!2sSylhet%20Division!5e0!3m2!1sen!2sbd!4v1735453338249!5m2!1sen!2sbd" 
            width="600" height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.form.name && this.form.email && this.form.subject && this.form.message) {
        this.loading = true;

        try {
          const templateParams = {
            name: this.form.name,
            email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
          };

          await emailjs.send(
            'service_y31130n', // <-- Replace with your EmailJS service ID
            'template_s5sh2kd', // <-- Replace with your EmailJS template ID
            templateParams,
            'pXp03B7L-wy872O1B' // <-- Replace with your EmailJS public key
          );

          alert('Message sent successfully!');
          this.clearForm();
        } catch (error) {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        } finally {
          this.loading = false;
        }
      } else {
        alert('Please fill out all fields.');
      }
    },
    clearForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
  },
};
</script>



<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}
.cta-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.cta-subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}


.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.contact-form {
  flex: 1 1 45%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #0056b3;
}

.contact-info {
  flex: 1 1 45%;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-item i {
  font-size: 1.5rem;
  color: #007bff;
  margin-right: 1rem;
}

.map-container {
  margin-top: 3rem;
}

.map-container iframe {
  width: 100%;
  border-radius: 8px;
  border: 0;
}
</style>