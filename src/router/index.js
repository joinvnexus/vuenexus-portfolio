import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const Blog = () => import('@/components/Blog.vue')
const BlogPost = () => import('@/components/BlogPost.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Scroll behavior implementation
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Handle anchor links
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // Offset for fixed header if needed
      }
    } else if (savedPosition) {
      // Keep scroll position when using browser back/forward
      return savedPosition
    } else {
      // Default scroll to top with smooth animation
      return { 
        top: 0,
        behavior: 'smooth' 
      }
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        scrollToTop: true // Explicit flag for this route
      }
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: Blog,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '/blogs/:id',
      name: 'BlogPost',
      component: BlogPost,
      meta: {
        // Don't scroll to top when navigating between blog posts
        scrollToTop: false 
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        scrollToTop: true
      }
    }
  ]
})

// Optional: Scroll to top on route change if needed
router.beforeEach((to, from, next) => {
  if (to.meta.scrollToTop) {
    window.scrollTo(0, 0)
  }
  next()
})

export default router
  
  