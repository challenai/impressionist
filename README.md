# Pather

Super easy to use Path Generator for Canvas and SVG.  
Don't google and try to build the basic shapes with math, it's a sheer waste of time,  
if you found some other shapes usable, just add it to the lib.

### Install

`npm install @pattaya/pather --save`

### Usage

import the Circle, Rectangle from pather library,  
and stroke it!
You can use it in React, Vue, or just vanilla js.

```javascript
// draw rectangle at position (x, y)
const r1 = Rectangle.Basic(x, y, width, height);

// draw rounded rectangle at position (x, y)
const r2 = Rectangle.Round(x, y, width, height, radius);

// draw regular polygon, with given sides and size
const p1 = Polygon.Regular(x, y, sides, size);

// draw triangle, with given side length
const t1 = Triangle.Equilateral(x, y, length);
```

### Quick Start

You can double click the `index.html` in `/exmaples` directory to run the example.    

```javascript
// import shapes
import { Rectangle, Polygon, Curve, Circle } from "@pattaya/pather";

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

// create rectangle, with x, y, width, height, and round coner
const rect = new Path2D(Rectangle.Round(300, 300, 200, 100, 20));
ctx.stroke(rect);

// create circle, with x, y, radius
const circle1 = new Path2D(Circle.Basic(420, 300, 6));
ctx.stroke(circle1);

// create rectangle, with x, y, width, height
// the rectangle is aligned with top-left, which is convinient to build UI.
const rect = new Path2D(Rectangle.BasicAligned(900, 500, 200, 100));

// create curve, with points and curve ratio
const curve = new Path2D(
  Curve.Multi(
    [
      [420, 300],
      [520, 460],
      [720, 300],
    ],
    200
  )
);
ctx.stroke(curve);

// create circle, with x, y, radius
const circle2 = new Path2D(Circle.Basic(720, 300, 6));
ctx.stroke(circle2);

// create regular polygon, with 5 sides and size
const polygon = new Path2D(Polygon.Regular(800, 240, 5, 80));
ctx.stroke(polygon);
```

### License

MIT
