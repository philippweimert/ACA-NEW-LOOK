# Agent Instructions

This document provides instructions and guidelines for AI agents working on this codebase.

## Standard Content Section

When you need to add a new content section to a page, please use the following structure. This design is based on the "Wir machen bAV einfach" section and is intended to be the standard for all new sections.

### Key Features
- A prominent title.
- A horizontal line above the section content to visually separate it from the content above.
- Consistent spacing.

### HTML Structure

To create a standard section, wrap the entire content block in a `<div>` with the class `section`. Inside this div, use an `<h2>` with the class `section-title` for the section's heading.

```html
<!-- Standard Content Section -->
<div class="section">
    <h2 class="section-title">Your Section Title Here</h2>
    <div class="section-content">
        <!-- Your content (text, images, grids, etc.) goes here. -->
        <p>This is a paragraph inside the standard section.</p>
    </div>
</div>
```

### CSS Styling

The necessary styles are already defined in `css/style.css`. Here is a summary of the key classes and their properties:

- **`.section`**:
  - `border-top: 3px solid #001f3f;` (This creates the top line)
  - `padding-top: 40px;` (Space below the top line)
  - `margin-top: 40px;` (Space above the top line)
  - `min-height: 300px;`

- **`.section-title`**:
  - `color: #001f3f;`
  - `font-size: 28px;`
  - `font-weight: bold;`
  - `margin-bottom: 30px;`

**Note on the bottom line:** The user mentioned a line *below* the title. In the current design, this bottom line is only applied to the main page title (`<h1 class="page-title">`). The standard section title (`.section-title`) does not have a bottom border. Please adhere to this pattern unless specifically instructed otherwise.
