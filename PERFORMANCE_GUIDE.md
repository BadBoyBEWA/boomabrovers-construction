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
   - First Input Delay (FID): < 100ms
   - Interaction to Next Paint (INP): < 200ms

2. **Web Vitals**
   ```javascript
   import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
   
   function sendToAnalytics({ name, delta, id }) {
     // Send to analytics
     gtag('event', name, {
       value: Math.round(name === 'CLS' ? delta * 1000 : delta),
       event_category: 'Web Vitals',
       event_label: id,
       non_interaction: true,
     });
   }
   
   onCLS(sendToAnalytics);
   onFCP(sendToAnalytics);
   onLCP(sendToAnalytics);
   onTTFB(sendToAnalytics);
   onINP(sendToAnalytics);
   ```

3. **Google Analytics Integration**
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKJB4EX7LD"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-ZKJB4EX7LD', {
       send_page_view: true,
       debug_mode: process.env.NODE_ENV === 'development',
       cookie_flags: 'SameSite=None;Secure',
       allow_google_signals: true,
       allow_ad_personalization_signals: true
     });
   </script>
   ```

4. **Sentry Error Tracking**
   ```javascript
   import * as Sentry from '@sentry/react';
   import { Replay } from '@sentry/replay';
   import { BrowserTracing } from '@sentry/tracing';

   Sentry.init({
     dsn: "YOUR_SENTRY_DSN",
     environment: process.env.NODE_ENV,
     release: process.env.REACT_APP_VERSION,
     tracesSampleRate: 1.0,
     replaysSessionSampleRate: 0.1,
     replaysOnErrorSampleRate: 1.0,
     integrations: [
       new BrowserTracing({
         tracePropagationTargets: ['localhost', /^https:\/\/boomabrovers\.com/],
       }),
       Sentry.consoleLoggingIntegration({
         levels: ['error', 'warn', 'info'],
       }),
       new Replay({
         maskAllText: true,
         blockAllMedia: true,
       }),
     ],
     beforeSend(event) {
       if (event.exception) {
         Sentry.showReportDialog({ eventId: event.event_id });
       }
       return event;
     },
   });
   ```

5. **Custom Performance Monitoring**
   ```javascript
   // Track custom metrics
   export const createSpan = (name, operation, callback) => {
     return Sentry.startSpan(
       {
         op: operation,
         name: name,
         data: {
           environment: process.env.NODE_ENV,
           timestamp: new Date().toISOString(),
         },
       },
       callback
     );
   };

   // Monitor resource loading
   export const monitorPerformance = () => {
     if ('performance' in window) {
       const observer = new PerformanceObserver((list) => {
         for (const entry of list.getEntries()) {
           // Log to console in development
           if (process.env.NODE_ENV === 'development') {
             console.log(`${entry.name}: ${entry.duration}`);
           }
           
           // Send to analytics
           gtag('event', 'performance_metric', {
             metric_name: entry.name,
             metric_value: entry.duration,
             metric_id: entry.id,
           });
           
           // Send to Sentry
           Sentry.addBreadcrumb({
             category: 'performance',
             message: `${entry.name}: ${entry.duration}`,
             level: 'info',
           });
         }
       });
       
       observer.observe({ 
         entryTypes: [
           'resource',
           'paint',
           'largest-contentful-paint',
           'first-input',
           'layout-shift',
           'longtask'
         ] 
       });
     }
   };

   // Track user interactions
   export const trackUserInteraction = (action, category, label) => {
     gtag('event', action, {
       event_category: category,
       event_label: label,
       timestamp: new Date().toISOString(),
     });
   };

   // Monitor API calls
   export const monitorApiCall = async (url, options) => {
     const startTime = performance.now();
     try {
       const response = await fetch(url, options);
       const endTime = performance.now();
       
       // Track API performance
       gtag('event', 'api_call', {
         url: url,
         duration: endTime - startTime,
         status: response.status,
       });
       
       return response;
     } catch (error) {
       // Track API errors
       Sentry.captureException(error, {
         extra: {
           url,
           options,
           duration: performance.now() - startTime,
         },
       });
       throw error;
     }
   };
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