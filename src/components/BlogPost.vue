<template>
    <section class="blog-post" v-if="blog">
      <div class="container">
        <!-- Blog Title -->
        <h1 class="blog-title" data-aos="fade-up">{{ blog.title }}</h1>
        
        <!-- Author and Date -->
        <div class="blog-meta" data-aos="fade-up" data-aos-delay="100">
          <span>By {{ blog.author }}</span> | 
          <span>{{ formatDate(blog.date) }}</span>
        </div>
        
        <!-- Cover Image -->
        <img :src="`/assets/images/${blog.image}`" :alt="blog.title" class="blog-cover" data-aos="fade-up" data-aos-delay="200" />
        
        <!-- Blog Content -->
        <div class="blog-content" data-aos="fade-up" data-aos-delay="300">
          <p v-for="(paragraph, index) in formattedContent" :key="index">
            {{ paragraph }}
          </p>
        </div>
        
        <!-- Tags -->
        <div class="blog-tags" data-aos="fade-up" data-aos-delay="400">
          <span v-for="(tag, index) in blog.tags" :key="index" class="tag">
            #{{ tag }}
          </span>
        </div>
         <!-- Related Blog Posts -->
      <div class="related-blogs" v-if="relatedBlogs.length" data-aos="fade-up" data-aos-delay="500">
        <h2>Related Posts</h2>
        <div class="related-blogs-container">
          <div 
            v-for="relatedBlog in relatedBlogs" 
            :key="relatedBlog.id" 
            class="related-blog-item"
          >
            <router-link :to="`/blogs/${relatedBlog.id}`">
              <img :src="`/assets/images/${relatedBlog.image}`" :alt="relatedBlog.title" class="related-blog-image" />
              <h3 class="related-blog-title">{{ relatedBlog.title }}</h3>
              <p class="related-blog-excerpt">{{ relatedBlog.excerpt }}</p>
            </router-link>
          </div>
        </div>
      </div>
        <!-- Navigation Buttons -->
        <div class="blog-navigation" data-aos="fade-up" data-aos-delay="500">
          <router-link to="/blogs" class="btn-back">← Back to Blogs</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import blogs from "@/assets/blogs.json";
  
  export default {
    name: "BlogPost",
    data() {
      return {
        blog: null,
        relatedBlogs: [],
      };
    },
    created() {
      const blogId = this.$route.params.id;
      this.blog = blogs.find((blog) => blog.id === parseInt(blogId));
        this.relatedBlogs = blogs.filter((blog) => blog.id !== parseInt(blogId)).slice(0, 3);
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString(undefined, options);
      },
      findRelatedBlogs() {
      const tags = this.blog.tags;
      const category = this.blog.category;
      this.relatedBlogs = blogs
        .filter((blog) => blog.id !== this.blog.id && (blog.category === category || tags.some(tag => blog.tags.includes(tag))))
        .slice(0, 3); // Limit to 3 related posts
    },

    },
    computed: {
      formattedContent() {
        return this.blog.content.split("\n"); // Split content by new lines for paragraphs
      },
    },
  };
  </script>
  
  <style scoped>
  .blog-post {
    margin-top: 40px;
    padding: 60px 20px;
   
  }
  .blog-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  .blog-meta {
    text-align: center;
    color: #666;
    margin-bottom: 20px;
  }
  .blog-cover {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  .blog-content {
    line-height: 1.8;
    font-size: 1.1rem;
    color: #333;
  }
  .blog-tags {
    margin-top: 20px;
    text-align: center;
  }
  .tag {
    display: inline-block;
    background-color: #eee;
    color: #555;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  .blog-navigation {
    text-align: center;
    margin-top: 30px;
  }
  .btn-back {
    text-decoration: none;
    background: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .btn-back:hover {
    background-color: #388e3c;
  }
  .related-blogs {
  margin-top: 50px;
}

.related-blogs h2 {
  text-align: center;
  margin-bottom: 20px;
}
.related-blogs a {
  text-decoration: none;
  color: #333;
}
.related-blogs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.related-blog-item {
  width: 300px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.related-blog-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.related-blog-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.related-blog-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
}
.related-blog-excerpt {
  font-size: 0.9rem;
  color: #555;
  padding: 0 10px 20px;
}
  </style>
  