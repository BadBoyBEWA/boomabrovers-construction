import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
import * as Sentry from '@sentry/react';
import { Replay } from '@sentry/replay';
import { BrowserTracing } from '@sentry/tracing';

let isSentryInitialized = false;

// Initialize Sentry with complete configuration
export const initSentry = () => {
  if (isSentryInitialized) {
    return;
  }

  Sentry.init({
    dsn: "https://9fa2492496578012584ff112064c4ec9@o4509495307993088.ingest.de.sentry.io/4509495369662544",
    environment: import.meta.env.MODE,
    release: import.meta.env.VITE_APP_VERSION,
    // Performance monitoring
    tracesSampleRate: 1.0,
    // Session replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // Logging
    _experiments: {
      enableLogs: true,
    },
    integrations: [
      new BrowserTracing({
        tracePropagationTargets: ['localhost', /^https:\/\/boomabrovers-construction\.onrender\.com/],
      }),
      Sentry.consoleLoggingIntegration({ 
        levels: ["log", "error", "warn", "info", "debug"] 
      }),
      new Replay({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    beforeSend(event) {
      // Don't send events in development
      if (import.meta.env.DEV) {
        console.log('Sentry event:', event);
        return null;
      }
      return event;
    },
  });

  isSentryInitialized = true;
};

// Initialize Google Analytics with enhanced configuration
export const initGA = () => {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GA_ID, {
    send_page_view: true,
    debug_mode: import.meta.env.DEV,
    cookie_flags: 'SameSite=None;Secure',
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
    anonymize_ip: true,
  });
};

// Enhanced page view tracking
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
  
  // Track in Sentry
  Sentry.addBreadcrumb({
    category: 'navigation',
    message: `Navigated to ${path}`,
    level: 'info',
  });
};

// Enhanced event tracking
export const trackEvent = (category, action, label, value = null) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: false,
      transport_type: 'beacon',
    });
  }
  
  // Track in Sentry
  Sentry.addBreadcrumb({
    category: category,
    message: `${action}: ${label}`,
    level: 'info',
    data: { value },
  });
};

// Enhanced web vitals tracking
export const trackWebVitals = () => {
  const sendToAnalytics = ({ name, delta, id }) => {
    // Send to Google Analytics
    if (window.gtag) {
      gtag('event', name, {
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        event_category: 'Web Vitals',
        event_label: id,
        non_interaction: true,
      });
    }
    
    // Send to Sentry
    Sentry.addBreadcrumb({
      category: 'web-vitals',
      message: `${name}: ${delta}`,
      level: 'info',
      data: { id },
    });
  };

  onCLS(sendToAnalytics);
  onLCP(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};

// Enhanced error boundary
export const ErrorBoundary = Sentry.ErrorBoundary;

// Enhanced exception capture
export const captureException = (error, context = {}) => {
  Sentry.captureException(error, {
    extra: context,
    tags: {
      environment: import.meta.env.MODE,
      version: import.meta.env.VITE_APP_VERSION,
    },
  });
};

// Enhanced span creation
export const createSpan = (name, operation, callback) => {
  return Sentry.startSpan(
    {
      op: operation,
      name: name,
      data: {
        environment: import.meta.env.MODE,
        timestamp: new Date().toISOString(),
      },
    },
    callback
  );
};

// Enhanced API tracing
export const tracedFetch = async (url, options = {}) => {
  return createSpan(
    `Fetch ${url}`,
    "http.client",
    async () => {
      const startTime = performance.now();
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const duration = performance.now() - startTime;
        
        // Track API performance
        trackEvent('api', 'request', url, duration);
        
        return data;
      } catch (error) {
        const duration = performance.now() - startTime;
        trackEvent('api', 'error', url, duration);
        throw error;
      }
    }
  );
};

// Enhanced logger
export const logger = {
  trace: (message, context = {}) => {
    console.trace(message, context);
    Sentry.logger.trace(message, context);
  },
  debug: (message, context = {}) => {
    console.debug(message, context);
    Sentry.logger.debug(message, context);
  },
  info: (message, context = {}) => {
    console.info(message, context);
    Sentry.logger.info(message, context);
  },
  warn: (message, context = {}) => {
    console.warn(message, context);
    Sentry.logger.warn(message, context);
  },
  error: (message, context = {}) => {
    console.error(message, context);
    Sentry.logger.error(message, context);
  },
  fatal: (message, context = {}) => {
    console.error(message, context);
    Sentry.logger.fatal(message, context);
  },
};

// Enhanced performance monitoring
export const monitorPerformance = () => {
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console in development
        if (import.meta.env.DEV) {
          console.log(`${entry.name}: ${entry.duration}`);
        }
        
        // Send to analytics
        trackEvent('performance', entry.name, entry.entryType, entry.duration);
        
        // Send to Sentry
        Sentry.addBreadcrumb({
          category: 'performance',
          message: `${entry.name}: ${entry.duration}`,
          level: 'info',
          data: {
            type: entry.entryType,
            duration: entry.duration,
          },
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

// Health check function
export const performHealthCheck = async () => {
  const startTime = performance.now();
  const healthData = {
    timestamp: new Date().toISOString(),
    environment: import.meta.env.MODE,
    version: import.meta.env.VITE_APP_VERSION,
    performance: {
      memory: window.performance?.memory,
      timing: window.performance?.timing,
    },
    connectivity: navigator.onLine,
    userAgent: navigator.userAgent,
  };

  try {
    // Check API health
    const apiHealth = await fetch('/api/health').then(r => r.json());
    healthData.api = apiHealth;
    
    // Track health check
    trackEvent('system', 'health-check', 'success', performance.now() - startTime);
    
    return healthData;
  } catch (error) {
    // Track health check failure
    trackEvent('system', 'health-check', 'failure', performance.now() - startTime);
    captureException(error, { context: 'health-check' });
    throw error;
  }
};

// Example usage in components:
/*
import { createSpan, logger } from '../utils/monitoring';

function MyComponent() {
  const handleClick = () => {
    createSpan(
      "Button Click",
      "ui.click",
      () => {
        logger.info("Button clicked", { buttonId: "test-button" });
        // Your code here
      }
    );
  };

  return <button onClick={handleClick}>Click Me</button>;
}
*/

// Example usage in API calls:
/*
import { tracedFetch, logger } from '../utils/monitoring';

async function fetchData() {
  try {
    const data = await tracedFetch('/api/data');
    logger.info("Data fetched successfully", { dataSize: data.length });
    return data;
  } catch (error) {
    logger.error("Failed to fetch data", { error: error.message });
    throw error;
  }
}
*/ 