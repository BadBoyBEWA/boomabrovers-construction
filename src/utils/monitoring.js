import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';
import * as Sentry from '@sentry/react';
import { Replay } from '@sentry/replay';

let isSentryInitialized = false;

// Initialize Sentry
export const initSentry = () => {
  if (isSentryInitialized) {
    return;
  }

  Sentry.init({
    dsn: "https://9fa2492496578012584ff112064c4ec9@o4509495307993088.ingest.de.sentry.io/4509495369662544",
    // Enable performance monitoring
    tracesSampleRate: 1.0,
    // Enable session replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // Enable logging
    _experiments: {
      enableLogs: true,
    },
    integrations: [
      // Send console logs to Sentry
      Sentry.consoleLoggingIntegration({ levels: ["log", "error", "warn"] }),
      // Enable session replay
      new Replay(),
    ],
  });

  isSentryInitialized = true;
};

// Initialize Google Analytics
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
  gtag('config', import.meta.env.VITE_GA_ID);
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

// Track web vitals
export const trackWebVitals = () => {
  // Core Web Vitals
  onCLS(console.log); // Cumulative Layout Shift
  onLCP(console.log); // Largest Contentful Paint
  onINP(console.log); // Interaction to Next Paint (replaces FID)
  
  // Additional metrics
  onFCP(console.log); // First Contentful Paint
  onTTFB(console.log); // Time to First Byte
};

// Error Boundary Component
export const ErrorBoundary = Sentry.ErrorBoundary;

// Helper function to capture exceptions
export const captureException = (error, context = {}) => {
  Sentry.captureException(error, {
    extra: context,
  });
};

// Helper function to create custom spans
export const createSpan = (name, operation, callback) => {
  return Sentry.startSpan(
    {
      op: operation,
      name: name,
    },
    callback
  );
};

// Helper function for API calls with tracing
export const tracedFetch = async (url, options = {}) => {
  return createSpan(
    `Fetch ${url}`,
    "http.client",
    async () => {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    }
  );
};

// Logger utility
export const logger = {
  trace: (message, context = {}) => {
    Sentry.logger.trace(message, context);
  },
  debug: (message, context = {}) => {
    Sentry.logger.debug(message, context);
  },
  info: (message, context = {}) => {
    Sentry.logger.info(message, context);
  },
  warn: (message, context = {}) => {
    Sentry.logger.warn(message, context);
  },
  error: (message, context = {}) => {
    Sentry.logger.error(message, context);
  },
  fatal: (message, context = {}) => {
    Sentry.logger.fatal(message, context);
  },
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

// Performance monitoring
export const monitorPerformance = () => {
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration}`);
      }
    });
    
    observer.observe({ entryTypes: ['resource', 'paint', 'largest-contentful-paint'] });
  }
}; 