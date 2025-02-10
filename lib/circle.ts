/**
 * draw a basic circle
 * 
 * @param x the position x of the circle
 * 
 * @param y the position y of the circle
 * 
 * @param radius the radius of the circle
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basic(20, 10, 30);
 * ```
 */
export function basic(x: number, y: number, radius: number): string {
  return `
      M${x + radius} ${y}
      a${radius} ${radius} 0 1 0 ${-radius * 2} 0
      a${radius} ${radius} 0 1 0 ${radius * 2} 0
    `;
}

/**
 * draw an ellipse
 * 
 * @param x the position x of the ellipse
 * 
 * @param y the position y of the ellipse
 * 
 * @param width the width of the ellipse
 * 
 * @param height the height y of the ellipse
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basic(20, 10, 30, 40);
 * ```
 */
export function ellipse(x: number, y: number, width: number, height: number): string {
  return `
      M${x + width / 2} ${y}
      a${width} ${height} 0 1 0 ${-width * 2} 0
      a${width} ${height} 0 1 0 ${width * 2} 0
    `;
}

/**
 * draw a basic circle aligned to left side,
 * 
 * the circle will be aligned with the left side.
 * 
 * @param x the position x of the circle
 * 
 * @param y the position y of the circle
 * 
 * @param radius the radius of the circle
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basicAlignedLeft(20, 10, 30);
 * ```
 */
export function basicAlignedLeft(x: number, y: number, radius: number): string {
  return basic(x + radius, y, radius);
}

/**
 * draw a basic circle aligned to top side,
 * 
 * the circle will be aligned with the top side.
 * 
 * @param x the position x of the circle
 * 
 * @param y the position y of the circle
 * 
 * @param radius the radius of the circle
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basicAlignedTop(20, 10, 30);
 * ```
 */
export function basicAlignedTop(x: number, y: number, radius: number): string {
  return basic(x, y + radius, radius);
}

/**
 * draw an ellipse
 * 
 * the ellipse will be aligned with the left side.
 * 
 * @param x the position x of the ellipse
 * 
 * @param y the position y of the ellipse
 * 
 * @param width the width of the ellipse
 * 
 * @param height the height y of the ellipse
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basic(20, 10, 30, 40);
 * ```
 */
export function ellipseAlignedLeft(x: number, y: number, width: number, height: number): string {
  return ellipse(x + width / 2, y, width, height);
}

/**
 * draw an ellipse
 * 
 * the ellipse will be aligned with the top side.
 * 
 * @param x the position x of the ellipse
 * 
 * @param y the position y of the ellipse
 * 
 * @param width the width of the ellipse
 * 
 * @param height the height y of the ellipse
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = circle.basic(20, 10, 30, 40);
 * ```
 */
export function ellipseAlignedTop(x: number, y: number, width: number, height: number): string {
  return ellipse(x, y + height / 2, width, height);
}
