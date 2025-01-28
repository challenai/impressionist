/**
 * draw a basic line
 * 
 * @param x the start point x of the line
 * 
 * @param y the start point y of the line
 * 
 * @param x1 the end point x of the line
 * 
 * @param y1 the end point y of the line
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const l = line.basic(20, 10, 30, 50);
 * ```
 */
export function basic(x: number, y: number, x1: number, y1: number): string {
  return `M${x} ${y} L${x1} ${y1}`;
}

/**
 * draw a fold line
 * 
 * @param points the points' array of the fold line
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const c = line.fold([
 *   [120, 30],
 *   [80, 100],
 *   [70, 180],
 * ]);
 * ```
 */
export function fold(points: number[][]): string {
  if (!points || points.length === 1) return "";

  let path = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    path += ` L${points[i][0]} ${points[i][1]}`;
  }

  return path;
}