# SMN Style Guide

A comprehensive design system for modern web applications, emphasizing simplicity, performance, and accessibility. This style guide provides consistent styling for colors, typography, spacing, layout, and components.

## Overview

This style guide is built with CSS custom properties (variables) for easy customization and maintenance. It includes definitions for colors, fonts, typography scales, spacing, layout systems, buttons, forms, cards, shadows, icons, images, animations, accessibility features, and a basic component library.

The style guide uses the Inter font family (Regular, Light, Bold) for a clean, modern look.

## Colors

### Brand Colors
- **Blue 1**: `#006895`
- **Blue 2**: `#0899ba`
- **Blue 3**: `#20a6b0`
- **Teal**: `#8ec1b8`
- **Beige**: `#dfdcd3`
- **White**: `#ffffff`
- **Black**: `#000000`
- **Ubuntu Orange**: `#ea5321`

### Semantic Colors
- **Primary**: Blue 1 (`#006895`)
- **Secondary**: Beige (`#dfdcd3`)
- **Success**: `#28a745`
- **Error**: `#dc3545`
- **Warning**: Ubuntu Orange (`#ea5321`)
- **Info**: Blue 2 (`#0899ba`)

## Fonts

The style guide uses the Inter font family, loaded from `fonts` folder:
- Inter Regular (normal weight)
- Inter Light (300 weight)
- Inter Bold (bold weight)

## Typography

Consistent sizing and styling for all text elements:

| Element | Font Size | Line Height | Letter Spacing | Font Weight |
|---------|-----------|-------------|----------------|-------------|
| H1 | 3rem | 1.2 | -0.02em | 300 (Light) |
| H2 | 2.25rem | 1.3 | -0.01em | 300 (Light) |
| H3 | 1.875rem | 1.4 | 0 | Normal |
| H4 | 1.5rem | 1.4 | 0 | Normal |
| H5 | 1.25rem | 1.5 | 0 | Normal |
| H6 | 1rem | 1.5 | 0 | Normal |
| Body Large | 1.125rem | 1.6 | 0 | Normal |
| Body | 1rem | 1.6 | 0 | Normal |
| Small | 0.875rem | 1.5 | 0 | Normal |
| Caption | 0.75rem | 1.4 | 0.01em | Normal |

## Spacing

A consistent spacing scale using rem units:
- **sm**: 0.5rem
- **md**: 1rem
- **lg**: 2rem

Specific applications:
- Section Padding: 2rem
- Card Padding: 1rem
- Button Padding: 0.5rem 1rem
- Grid Gap: 1rem
- Margin Rule: 1rem

## Layout System

### Grid System
- 12-column CSS Grid
- Flexible container with max-width of 1200px
- Responsive breakpoints:
  - Mobile: 640px
  - Tablet: 768px
  - Laptop: 1024px
  - Desktop: 1280px
  - Large Screen: 1536px

### Examples
- 12-column grid with span examples
- Auto-fit responsive grids
- Flexbox layouts with flex ratios

### Container
Max-width container with automatic margins and responsive padding.

## Buttons

Five button variants with consistent styling:

### Variants
- **Primary**: Solid background with primary color
- **Secondary**: Solid background with secondary color
- **Outline**: Transparent background with colored border
- **Ghost**: Transparent background, colored text on hover
- **Danger**: Solid background with error color

### States
All buttons include hover, active, focus, and disabled states with appropriate visual feedback.

## Forms & Inputs

Comprehensive styling for form elements:
- Text inputs, email, password
- Textareas
- Select dropdowns
- Checkboxes and radio buttons
- Labels
- Error and success messages
- Focus rings for accessibility
- Validation states (valid/invalid)

## Cards & Containers

Card components with:
- White background
- Subtle border and shadow
- Rounded corners
- Hover elevation effect
- Consistent padding

## Shadows & Elevation

Four shadow levels for depth:
- **shadow-sm**: Subtle shadow for small elements
- **shadow-md**: Medium shadow for cards and panels
- **shadow-lg**: Larger shadow for modals and overlays
- **shadow-xl**: Maximum shadow for emphasis

## Icons

Basic icon styling with Font Awesome integration:
- Standard sizes: 16px, 20px, 24px
- Color inheritance
- Hover effects
- Examples include star, check, home, user, heart icons

## Images

Image guidelines include:
- Responsive sizing
- Rounded corners
- Subtle shadows
- Aspect ratio classes: 1:1, 16:9, 4:3
- Placeholder image: `placeholder.jpg`
- Optimization rules (WebP, lazy loading, etc.)

## Animation & Motion

Smooth transitions with:
- Timing: 200ms
- Easing: ease-in-out
- Applied to colors, backgrounds, and borders
- Respects `prefers-reduced-motion`

## Accessibility

- WCAG AA compliance baseline
- Minimum contrast ratios
- Focus visibility with outlines
- Keyboard navigation support
- Reduced motion for users who prefer it

## Dark Mode

Basic dark mode support using `prefers-color-scheme: dark` media query. Inverts primary colors for dark backgrounds.

## Component Library

Starter components for common UI patterns:
- Navbar
- Footer
- Hero section
- Feature blocks
- Modals
- Alerts
- Toasts
- Dropdowns

Each component includes responsive behavior and multiple states/variants.

## Usage

1. Include `style-guide.css` in your HTML:
   ```html
   <link rel="stylesheet" href="style-guide.css">
   ```

2. Use CSS classes and custom properties in your markup.

3. Customize variables in `:root` for brand-specific adjustments.

## Files

- `style-guide.css`: Main stylesheet
- `fonts/`: Font files (Inter Regular, Light, Bold in woff2, woff, ttf)
- `index.html`: Showcase page demonstrating all styles
- `README.md`: This documentation

## Inspiration

This style guide draws inspiration from Apple's design system, focusing on clarity, simplicity, and performance for developer-facing applications.