# Frontend Style Guide

This style guide outlines the design principles, components, and visual language for the Q-Control Nova frontend.

## Color Palette

### Primary Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#0056B3` | Primary actions, links, headers |
| Secondary Teal | `#00A3A3` | Secondary actions, highlights |
| Accent Orange | `#FF5722` | Accents, notifications, alerts |

### Grayscale
| Color | Hex Code | Usage |
|-------|----------|-------|
| Black | `#121212` | Text, icons |
| Dark Gray | `#333333` | Headings, important text |
| Medium Gray | `#757575` | Secondary text |
| Light Gray | `#E0E0E0` | Borders, dividers |
| Off-White | `#F8F8F8` | Backgrounds, cards |
| White | `#FFFFFF` | Page backgrounds |

### State Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| Success Green | `#4CAF50` | Success states, confirmations |
| Warning Yellow | `#FFC107` | Warning messages |
| Error Red | `#F44336` | Error states, destructive actions |
| Info Blue | `#2196F3` | Information messages |

## Typography

### Font Families
- **Primary Font**: Roboto
- **Secondary Font**: Open Sans
- **Monospace Font**: Source Code Pro (for code blocks)

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 32px | 700 | 1.2 |
| H2 | 24px | 700 | 1.3 |
| H3 | 20px | 600 | 1.4 |
| H4 | 18px | 600 | 1.4 |
| Body | 16px | 400 | 1.5 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 400 | 1.4 |

## UI Components

### Buttons

#### Primary Button
- Background: Primary Blue
- Text: White
- Border: None
- Border-radius: 4px
- Padding: 10px 20px
- Hover: Darken by 10%
- Disabled: 50% opacity

#### Secondary Button
- Background: Transparent
- Text: Primary Blue
- Border: 1px solid Primary Blue
- Border-radius: 4px
- Padding: 10px 20px
- Hover: Light blue background (10% opacity)
- Disabled: 50% opacity

#### Tertiary Button
- Background: Transparent
- Text: Primary Blue
- Border: None
- Padding: 10px 20px
- Hover: Light blue background (10% opacity)
- Disabled: 50% opacity

### Input Fields

#### Text Input
- Border: 1px solid Light Gray
- Border-radius: 4px
- Padding: 10px 12px
- Focus: Border color changes to Primary Blue
- Error: Border color changes to Error Red
- Placeholder: Medium Gray

#### Dropdown
- Same styling as Text Input
- Icon: Chevron down
- Options menu: White background with 2px border radius
- Selected option: Light blue background (10% opacity)

### Cards
- Background: White
- Border: None
- Border-radius: 8px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
- Padding: 20px

## Iconography

### Icon System
We use Material Design Icons as our primary icon library.

### Icon Sizes
- Large: 32px
- Medium: 24px (default)
- Small: 16px

### Icon Colors
Icons should inherit the text color of their context unless specifically styled otherwise.

## Spacing

We use an 8px spacing system:
- Extra small: 4px
- Small: 8px
- Medium: 16px
- Large: 24px
- Extra large: 32px
- 2X Extra large: 48px
- 3X Extra large: 64px

## Shadows

| Level | Usage | CSS |
|-------|-------|-----|
| Level 1 | Cards, buttons | `box-shadow: 0 2px 4px rgba(0,0,0,0.1)` |
| Level 2 | Dropdowns, popovers | `box-shadow: 0 4px 8px rgba(0,0,0,0.1)` |
| Level 3 | Modals, dialogs | `box-shadow: 0 8px 16px rgba(0,0,0,0.1)` |

## Animations

### Transitions
- Default transition: 150ms ease-in-out
- Page transitions: 300ms ease-in-out

### Hover States
All interactive elements should have a hover state that provides visual feedback.

## Accessibility

- All text should maintain a minimum contrast ratio of 4.5:1 against its background (WCAG AA compliance)
- Interactive elements must have a visible focus state
- Icons that convey meaning should include appropriate alt text or aria-labels
- Form elements must have associated labels

## Responsive Design

We follow a mobile-first approach with these breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## Example Implementation

```html
<button class="btn btn-primary">
  <span class="btn-icon">
    <i class="material-icons">add</i>
  </span>
  <span class="btn-text">Add New Item</span>
</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  transition: all 150ms ease-in-out;
}

.btn-primary {
  background-color: #0056B3;
  color: #FFFFFF;
  border: none;
}

.btn-primary:hover {
  background-color: #004494;
}

.btn-icon {
  margin-right: 8px;
}
``` 