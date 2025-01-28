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