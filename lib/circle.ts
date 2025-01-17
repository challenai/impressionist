/**
 * draw a circle
 */
export class Circle {
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
   * const circle = Circle.Basic(20, 10, 30);
   * ```
   */
  static Basic(x: number, y: number, radius: number): string {
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
   * const circle = Circle.BasicAlignedLeft(20, 10, 30);
   * ```
   */
  static BasicAlignedLeft(x: number, y: number, radius: number): string {
    return this.Basic(x + radius, y, radius);
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
   * const circle = Circle.BasicAlignedTop(20, 10, 30);
   * ```
   */
  static BasicAlignedTop(x: number, y: number, radius: number): string {
    return this.Basic(x, y + radius, radius);
  }
}
