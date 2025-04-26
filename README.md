# H-D-Notary Website

A professional website for H-D Notary services built with React, featuring a modern UI with elegant design elements.

## Project Overview

This single-page application provides potential clients with information about H-D Notary services, qualifications, and contact details. The site features a responsive design with smooth scrolling navigation and interactive UI elements.

## Structure

The application follows a component-based architecture:

- `App.js`: Main application component containing all sections
- `/components`: Reusable UI components
  - `Header.js`: Navigation and logo, with scroll-aware resizing
  - `Footer.js`: Site footer with navigation and copyright
  - `ServiceCard.js`: Cards displaying different service offerings

## Key Features

- **Responsive Design**: Adapts to all screen sizes
- **Smooth Scrolling**: Enhanced navigation with offset compensation
- **Interactive Elements**: Hover effects and animations for better engagement
- **Performance Optimized**: Scroll handling with throttling and debounce
- **Accessibility**: Semantic HTML with proper contrast ratios

## UI Components

### Header
The header component includes:
- Logo display
- Navigation links with smooth scrolling
- Smart resizing based on scroll position

### Service Cards
Used to display the variety of notary services offered:
- Icon representation of service type
- Title and description
- Interactive hover effects

### Contact Methods
Displays various ways to contact the business:
- Phone, email, and location information
- Visual icons for better recognition
- Interactive hover effects

## Styling

The site uses a custom color scheme with:
- Dark blue background (`#101A23`, `#1C2A36`)
- Gold accents (`#D4AF37`, `#BFA76F`, `#FFD700`)
- Elegant typography using Playfair Display and Source Sans Pro

## Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The site is built for deployment to AWS:
1. Build using `npm run build`
2. Deploy to S3 bucket
3. Configure CloudFront distribution for CDN delivery

## Development

### Prerequisites
- Node.js 16+
- npm 7+

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm start

# Build production version
npm run build
```

### File Structure
```
/hd-notary
  /public
  /src
    /assets     # Images and static files
    /components # React components
    /utils      # Helper functions
    App.js      # Main component
    App.css     # Styles
    index.js    # Entry point
```