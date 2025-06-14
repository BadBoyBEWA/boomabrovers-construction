// Image optimization
export const optimizeImage = (src, width = 800) => {
  // If using a CDN or image optimization service, implement the logic here
  return src
}

// Debounce function
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  })
}

// Memoization helper
export const memoize = (fn) => {
  const cache = new Map()
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

// Resource preloading
export const preloadResources = (resources) => {
  resources.forEach((resource) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = resource.type
    link.href = resource.url
    document.head.appendChild(link)
  })
}

// Performance monitoring
export const measurePerformance = (label) => {
  if (process.env.NODE_ENV === 'development') {
    console.time(label)
    return () => console.timeEnd(label)
  }
  return () => {}
}

// Cache management
export const cacheManager = {
  set: (key, value, ttl = 3600) => {
    const item = {
      value,
      expiry: Date.now() + ttl * 1000,
    }
    localStorage.setItem(key, JSON.stringify(item))
  },
  get: (key) => {
    const item = localStorage.getItem(key)
    if (!item) return null
    const { value, expiry } = JSON.parse(item)
    if (Date.now() > expiry) {
      localStorage.removeItem(key)
      return null
    }
    return value
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  },
}

// Error boundary logging
export const logError = (error, errorInfo) => {
  // Implement error logging service integration here
  console.error('Error:', error)
  console.error('Error Info:', errorInfo)
}

// API request caching
export const apiCache = {
  cache: new Map(),
  set: (key, data, ttl = 300000) => {
    apiCache.cache.set(key, {
      data,
      expiry: Date.now() + ttl,
    })
  },
  get: (key) => {
    const item = apiCache.cache.get(key)
    if (!item) return null
    if (Date.now() > item.expiry) {
      apiCache.cache.delete(key)
      return null
    }
    return item.data
  },
  clear: () => {
    apiCache.cache.clear()
  },
}

// Animation frame optimization
export const requestAnimationFrame = (callback) => {
  let ticking = false
  return (event) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(event)
        ticking = false
      })
      ticking = true
    }
  }
}

// Event listener optimization
export const addOptimizedEventListener = (element, event, handler, options = {}) => {
  const optimizedHandler = requestAnimationFrame(handler)
  element.addEventListener(event, optimizedHandler, options)
  return () => element.removeEventListener(event, optimizedHandler, options)
} 