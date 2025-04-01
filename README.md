# Impressionist

Impressionist is a **Path Generator** for **Canvas and SVG**.

No more struggling with trigonometric functions like `sin`, `cos`, or `exp` to draw basic shapes. Impressionist saves you time by providing a simple API to generate **single path strings**, ensuring optimal performance and maintainability.

![Impressionist](docs/screenshot.png)

## Supported Paths

Impressionist provides a variety of path generators:

### Basic Shapes

- **Circle**
  - Basic, aligned, or symmetrical
- **Ellipse** _(if applicable)_
- **Line**
  - Simple two-point line
  - Folded line

### Advanced Shapes

- **Steps**
  - Step line (with rounded corners, relative or absolute)
- **Polygon**
  - Custom polygons
  - Regular polygons
- **Rectangle**
  - Basic rectangle (with optional rounded corners)
  - Diamond (aligned or symmetrical)
  - Parallelogram (aligned or symmetrical)
- **Triangle**
  - Equilateral (aligned or symmetrical)
  - Isosceles (aligned or symmetrical)
- **Capsule** _(If more details are needed, clarify usage)_
- **Bezier Curve**
  - Quadratic
  - Cubic
  - Continuous quadratic
  - Continuous cubic
- **Arrows**
  - Basic, Vee, Triangle, Blunt, Dome, Bullet
- **Common Shapes**
  - Plus sign
  - Popup

## Installation

Install via npm:

```sh
npm install impressionist --save
```

### Usage

You can use Impressionist in React, Vue, or vanilla JavaScript:

```javascript
// Draw a basic rectangle
const r1 = rectangle.basic(x, y, width, height);

// Draw a rounded rectangle
const r2 = rectangle.round(x, y, width, height, radius);

// Draw a regular polygon with a given number of sides
const p1 = polygon.regular(x, y, sides, size);

// Draw an equilateral triangle
const t1 = triangle.equilateral(x, y, length);
```

### Quick Start

To quickly test Impressionist:

1. Open `index.html` in the `/examples` directory (if your browser allows running local HTML files).
2. Alternatively, start a local server to bypass permission issues:

```bash
python3 -m http.server
```

```javascript
import { rectangle, polygon, curve, circle } from "impressionist";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

// Create and draw a rounded rectangle
const rect = new Path2D(rectangle.round(300, 300, 200, 100, 20));
ctx.stroke(rect);

// Create and draw a circle
const circle1 = new Path2D(circle.basic(420, 300, 6));
ctx.stroke(circle1);

// Create and draw a regular polygon
const polygon1 = new Path2D(polygon.regular(800, 240, 5, 80));
ctx.stroke(polygon1);

// Create and draw a smooth curve
const cur = new Path2D(
  curve.multi(
    [
      [420, 300],
      [520, 460],
      [720, 300],
    ],
    200
  )
);
ctx.stroke(cur);
```

### License

This project is licensed under the **MIT License**.
