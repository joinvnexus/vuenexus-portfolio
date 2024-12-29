<template>
    <section id="blog" class="blog-section">
      <div class="container">
        <!-- Section Title -->
        <h2 class="section-title" data-aos="fade-up">Latest Blog Posts</h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Explore my articles on WordPress, frontend development, and web technologies.
        </p>
  
        <!-- Search and Filter -->
        <div class="filter-container" data-aos="fade-up" data-aos-delay="200">
          <input
            type="text"
            v-model="searchQuery"
            class="search-bar"
            placeholder="Search by title or content..."
          />
          <select v-model="selectedCategory" class="category-filter">
            <option value="">All Categories</option>
            <option v-for="(category, index) in categories" :key="index" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
  
        <!-- Blog Grid -->
        <div class="blog-grid" data-aos="fade-up" data-aos-delay="300">
          <div
            class="blog-card"
            v-for="(blog, index) in filteredBlogs"
            :key="blog.id"
            :class="{ featured: index === 0 }"
          >
            <img :src="`/assets/images/${blog.image}`" :alt="blog.title" class="blog-image" />
            <div class="blog-content">
              <h3 class="blog-title">{{ blog.title }}</h3>
              <p class="blog-excerpt">{{ blog.excerpt }}</p>
              <!-- <a :href="blog.link" class="read-more">Read More</a> -->
               <RouterLink :to="{ name: 'BlogPost', params: { id: blog.id }}" class="read-more">Read More</RouterLink>
            </div>
          </div>
        </div>
  
        <!-- No Results Found -->
        <p v-if="filteredBlogs.length === 0" class="no-results" data-aos="fade-up" data-aos-delay="400">
          No blog posts found. Try a different search or category.
        </p>
      </div>
    </section>
  </template>
  
  <script>
  import blogs from "@/assets/blogs.json";
  
  export default {
    name: "Blog",
    data() {
      return {
        blogs: blogs,
        searchQuery: "",
        selectedCategory: "",
      };
    },
    computed: {
      categories() {
        const allCategories = this.blogs.map((blog) => blog.category);
        return [...new Set(allCategories)];
      },
      filteredBlogs() {
        return this.blogs.filter((blog) => {
          const matchesSearch =
            blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesCategory =
            this.selectedCategory === "" || blog.category === this.selectedCategory;
          return matchesSearch && matchesCategory;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-section {
    padding: 60px 20px;
    background-color: #f9f9f9;
  }
  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 30px;
  }
  .filter-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
  }
  .search-bar {
    padding: 10px 15px;
    width: 50%;
    max-width: 400px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  }
  .category-filter {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  }
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  .blog-card {
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  .blog-card:hover {
    transform: translateY(-5px);
  }
  .blog-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .blog-content {
    padding: 20px;
  }
  .blog-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: #333;
  }
  .blog-excerpt {
    color: #666;
    margin-bottom: 15px;
  }
  .read-more {
    display: inline-block;
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
  }
  .read-more:hover {
    border-color: #4caf50;
  }
  .featured {
    grid-column: span 2;
  }
  .no-results {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    .featured {
      grid-column: span 1;
    }
  }
  </style>
  