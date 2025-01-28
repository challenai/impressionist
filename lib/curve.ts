/**
 * draw a basic curve with control point (cx, cy)
 * 
 * @param x the start point x of the curve
 * 
 * @param y the start point y of the curve
 * 
 * @param x1 the end point x of the curve
 * 
 * @param y1 the end point y of the curve
 * 
 * @param controlPointX the control point x of the curve
 * 
 * @param controlPointY the control point y of the curve
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const curve = Curve.Basic(20, 10, 30, 50, 25, 50);
 * ```
 */
export function basic(
  x: number,
  y: number,
  x1: number,
  y1: number,
  controlPointX: number,
  controlPointY: number,
): string {
  return `M${x} ${y} Q${controlPointX} ${controlPointY} ${x1} ${y1}`;
}

/**
 * draw a curve with multi control point
 * 
 * @param points the points' array of the curve
 * 
 * @param radius the radius of the curve
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const curve = Curve.Multi([
 *   [420, 300],
 *   [520, 460],
 *   [720, 300],
 * ], 10);
 * ```
 */
export function multi(
  points: number[][],
  radius: number
): string {
  if (!points || points.length === 1) return "";
  const sz = points.length;

  let path = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < sz - 1; i++) {
    const x_ = points[i][0];
    const y_ = points[i][1];
    const deltaX1 = x_ - points[i - 1][0];
    const deltaY1 = y_ - points[i - 1][1];
    const deltaX2 = x_ - points[i + 1][0];
    const deltaY2 = y_ - points[i + 1][1];
    const ratio = radius / Math.sqrt(deltaX2 * deltaX2 + deltaY2 * deltaY2);
    path += ` L${x_ - deltaX1 * ratio} ${y_ - deltaY1 * ratio} Q${x_} ${y_} ${x_ - deltaX2 * ratio
      } ${y_ - deltaY2 * ratio}`;
  }

  path += `L${points[sz - 1][0]} ${points[sz - 1][1]}`;

  return path;
}
