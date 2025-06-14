# Performance Optimization Guide

## Image Optimization
1. **Image Compression**
   - Use tools like `sharp` or `imagemin` for automatic compression
   - Target file sizes:
     - Hero images: < 200KB
     - Gallery images: < 100KB
     - Thumbnails: < 50KB

2. **Responsive Images**
   ```jsx
   <img
     srcSet="/images/small.jpg 300w,
             /images/medium.jpg 600w,
             /images/large.jpg 900w"
     sizes="(max-width: 600px) 300px,
            (max-width: 900px) 600px,
            900px"
     src="/images/fallback.jpg"
     alt="Description"
   />
   ```

3. **Lazy Loading**
   ```jsx
   <img
     src="/images/project.jpg"
     loading="lazy"
     alt="Project Image"
   />
   ```

## Code Optimization
1. **Code Splitting**
   ```jsx
   const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
   ```

2. **Tree Shaking**
   - Use ES modules
   - Avoid side effects
   - Use named exports

3. **Bundle Analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

## Caching Strategy
1. **Browser Caching**
   ```nginx
   # nginx.conf
   location /static/ {
     expires 1y;
     add_header Cache-Control "public, no-transform";
   }
   ```

2. **Service Worker**
   ```javascript
   // service-worker.js
   const CACHE_NAME = 'boomabrovers-cache-v1';
   const urlsToCache = [
     '/',
     '/index.html',
     '/static/js/main.chunk.js',
     '/static/css/main.chunk.css'
   ];
   ```

## Performance Monitoring
1. **Lighthouse Metrics**
   - First Contentful Paint (FCP): < 1.5s
   - Largest Contentful Paint (LCP): < 2.5s
   - Time to Interactive (TTI): < 3.5s
   - Cumulative Layout Shift (CLS): < 0.1

2. **Web Vitals**
   ```javascript
   import { getCLS, getFID, getLCP } from 'web-vitals';
   
   function sendToAnalytics({ name, delta, id }) {
     // Send to analytics
   }
   
   getCLS(sendToAnalytics);
   getFID(sendToAnalytics);
   getLCP(sendToAnalytics);
   ```

## Build Optimization
1. **Production Build**
   ```bash
   npm run build
   ```

2. **Compression**
   ```bash
   npm install compression-webpack-plugin
   ```

3. **Minification**
   ```javascript
   // vite.config.js
   export default {
     build: {
       minify: 'terser',
       terserOptions: {
         compress: {
           drop_console: true,
         },
       },
     },
   }
   ```

## Network Optimization
1. **HTTP/2**
   - Enable server push
   - Use multiplexing

2. **CDN Configuration**
   - Enable GZIP compression
   - Configure cache headers
   - Use edge locations

## Testing Tools
1. **Performance Testing**
   - Lighthouse
   - WebPageTest
   - Chrome DevTools

2. **Monitoring**
   - Google Analytics
   - New Relic
   - Sentry

## Regular Maintenance
1. **Weekly Checks**
   - Run Lighthouse audits
   - Check bundle sizes
   - Monitor error rates

2. **Monthly Reviews**
   - Update dependencies
   - Review performance metrics
   - Optimize images
   - Clean up unused code 