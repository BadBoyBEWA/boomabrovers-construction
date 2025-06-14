# Image Assets Structure

## Directory Structure
```
public/images/
├── hero/           # Hero section images
│   └── hero-bg.jpg
├── projects/       # Project showcase images
├── services/       # Service-related images
├── team/          # Team member photos
├── about/         # About page images
└── testimonials/  # Testimonial profile pictures
```

## Image Requirements

### Hero Images
- Resolution: 1920x1080px (16:9)
- Format: WebP with JPG fallback
- Max Size: 200KB
- Purpose: Main banner images for homepage and key pages
- Current: hero-bg.jpg

### Project Images
- Resolution: 1200x800px (3:2)
- Format: WebP with JPG fallback
- Max Size: 100KB
- Purpose: Project showcase and gallery images

### Service Images
- Resolution: 800x600px (4:3)
- Format: WebP with JPG fallback
- Max Size: 80KB
- Purpose: Service category and detail page images

### Team Photos
- Resolution: 400x400px (1:1)
- Format: WebP with JPG fallback
- Max Size: 50KB
- Purpose: Team member profile pictures

### About Images
- Resolution: 1200x800px (3:2)
- Format: WebP with JPG fallback
- Max Size: 100KB
- Purpose: About page and company history images

### Testimonial Photos
- Resolution: 200x200px (1:1)
- Format: WebP with JPG fallback
- Max Size: 30KB
- Purpose: Testimonial profile pictures

## Image Optimization Guidelines
1. Use WebP format with JPG fallback for better performance
2. Implement lazy loading for images below the fold
3. Use responsive images with srcset for different screen sizes
4. Implement proper alt text for accessibility
5. Use descriptive filenames (e.g., `modern-house-renovation.webp`)

## Usage Examples

### Hero Image
```jsx
<img
  src="/images/hero/hero-bg.jpg"
  alt="Modern construction site with heavy machinery"
  loading="eager"
  width="1920"
  height="1080"
/>
```

### Project Image
```jsx
<img
  src="/images/projects/residential-renovation.webp"
  alt="Completed residential renovation project"
  loading="lazy"
  width="1200"
  height="800"
/>
```

### Service Image
```jsx
<img
  src="/images/services/construction-management.webp"
  alt="Construction management team meeting"
  loading="lazy"
  width="800"
  height="600"
/>
```

### Team Photo
```jsx
<img
  src="/images/team/john-doe.webp"
  alt="John Doe - Project Manager"
  loading="lazy"
  width="400"
  height="400"
/>
```

### About Image
```jsx
<img
  src="/images/about/company-history.webp"
  alt="Our company's journey through the years"
  loading="lazy"
  width="1200"
  height="800"
/>
```

### Testimonial Photo
```jsx
<img
  src="/images/testimonials/client-review.webp"
  alt="Satisfied client testimonial"
  loading="lazy"
  width="200"
  height="200"
/>
```

## Image Processing
1. Use image optimization tools before adding to the project
2. Implement proper caching strategies
3. Use CDN for production deployment
4. Monitor image loading performance
5. Implement error handling for failed image loads

## Current Image Structure
- hero-bg.jpg: Main hero background image
- build2.jpeg: Construction site image
- team/: Team member photos
- about/: About page images
- services/: Service-related images 