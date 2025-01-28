/**
 * draw a polygon with given vertices
 * 
 * @param points the vertices' array of the polygon
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const p = polygon.basic([
 *   [40, 20],
 *   [80, 30],
 *   [70, 50],
 * ]);
 * ```
 */
export function basic(points: number[][]): string {
  const n = points.length;
  if (n < 3) return "";
  let path = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < n; i++) {
    path += ` L${points[i][0]} ${points[i][1]}`
  }

  path += " Z";

  return path;
}

/**
 * draw a regular polygon with given radius
 * 
 * @param x the position x of the polygon
 * 
 * @param y the position y of the polygon
 * 
 * @param sides the sides of the polygon
 * 
 * @param radius the radius of the polygon
 * 
 * notice: this shape is not symmetry.
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const p = polygon.regular(800, 240, 5, 80);
 * ```
 */
export function regular(x: number, y: number, sides: number, radius: number): string {
  const base = 2 * Math.PI / sides;
  let path = ""
  for (let i = 1; i < sides; i++) {
    const radians = base * i;
    path += ` l${radius * Math.cos(radians)} ${radius * Math.sin(radians)}`
  }

  // FIX: align to its center
  return `M${x + radius / 2} ${y} ${path} Z`;
}
