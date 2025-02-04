export interface Point {
  x: number;
  y: number;
};

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
  return `M${x} ${y}L${x1} ${y1}`;
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
export function fold2(points: number[][]): string {
  const points_ = points.map((p: number[]) => ({ x: p[0], y: p[1] }));
  return fold(points_);
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
 *   {x: 120, y: 30},
 *   {x: 80, y: 100},
 *   {x: 70, y: 180},
 * ], 5);
 * ```
 */
export function fold(points: Point[]): string {
  if (!points || points.length === 1) return "";

  let path = `M${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    path += `L${points[i].x} ${points[i].y}`;
  }
  return path;
}
