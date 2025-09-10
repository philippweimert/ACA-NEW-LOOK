# Agent Instructions

This document provides instructions and guidelines for AI agents working on this codebase.

## Standard Content Section

When you need to add a new content section to a page, please use the following structure. This design is based on the "Wir machen bAV einfach" section and is intended to be the standard for all new sections.

### Key Features
- A prominent title.
- A horizontal line **below** the title to visually separate it from the section content.
- Consistent spacing.
- A minimum height to ensure visual consistency, even with little content.

### Implementation via JavaScript

**Important:** These standard sections are added dynamically to all pages except "Kontakt" by the `insertEmptySections` function in `js/script.js`. **Do not manually add the HTML for these sections to the page files.**

If you need to change the number of sections or the pages they appear on, modify the logic in `js/script.js`.

### HTML Structure (for reference)

The `insertEmptySections` function generates the following HTML structure for each section. Note that the `<h2>` title comes **before** the `<div>` that has the top border, placing the title above the line.

```html
<!-- Dynamically Injected Standard Section -->
<h2 class="section-title">Your Section Title Here</h2>
<div class="section">
    <div class="section-content">
        <!-- Your content (text, images, grids, etc.) goes here. -->
        <p>This is a paragraph inside the standard section.</p>
    </div>
</div>
```

### CSS Styling

The necessary styles are already defined in `css/style.css`. Here is a summary of the key classes and their properties:

- **`.section`**:
  - `border-top: 3px solid #001f3f;` (This creates the separator line)
  - `padding-top: 40px;` (Space below the line)
  - `margin-top: 30px;` (Space between the title and the line, controlled by the title's margin-bottom)
  - `min-height: 300px;`

- **`.section-title`**:
  - `color: #001f3f;`
  - `font-size: 28px;`
  - `font-weight: bold;`
  - `margin-bottom: 30px;`
