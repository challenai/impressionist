/**
 * draw a baisc step line
 *
 * @param x the start point x of the step line
 *
 * @param y the start point y of the step line
 *
 * @param pathes the points' array of the step line, start from x axis
 *
 * @param radius the round radius of the step line
 *
 * **Example Usage**
 *
 * ```jsx
 * const s = step.basic([120, 30, -60]);
 * ```
 */
export function basic(
  x: number,
  y: number,
  pathes: number[],
  radius?: number,
): string {
  if (!pathes || pathes.length <= 2) return relative(x, y, pathes);

  const pathes_: number[] = [];
  let h = pathes[0];
  let v = pathes[1];
  let horizontal = true;
  for (let i = 2; i < pathes.length; i++) {
    if (horizontal) {
      pathes_.push(pathes[i] - h);
      h = pathes[i];
    } else {
      pathes_.push(pathes[i] - v);
      v = pathes[i];
    }
    horizontal = !horizontal;
  }
  return relative(x, y, pathes_, radius);
}

/**
 * draw a baisc step line (relative path)
 *
 * @param x the start point x of the step line
 *
 * @param y the start point y of the step line
 *
 * @param pathes the pathes' array of the step line, start from x axis
 *
 * @param radius the round radius of the step line
 *
 * **Example Usage**
 *
 * ```jsx
 * const s = step.basic([120, 30, -60]);
 * ```
 */
export function relative(
  x: number,
  y: number,
  pathes: number[],
  radius?: number,
): string {
  if (!pathes) return "";
  if (radius) return _round(x, y, pathes, radius);

  let horizontal = true;
  let path = `M${x} ${y}`;
  for (const p of pathes) {
    if (horizontal) {
      path += `l${p} 0`;
    } else {
      path += `l0 ${p}`;
    }
    horizontal = !horizontal;
  }

  return path;
}

/**
 * draw a round step line with given radius
 *
 * @param x the start point x of the step line
 *
 * @param y the start point y of the step line
 *
 * @param pathes the pathes' array of the step line, 0: x axis, 1: y axis
 *
 * @param radius the round radius of the step line
 *
 * **Example Usage**
 *
 * ```jsx
 * const s = step.round([
 *   [0, 120],
 *   [1, 80],
 *   [0, 70],
 * ], 20);
 * ```
 */
export function _round(
  x: number,
  y: number,
  pathes: number[],
  radius: number,
): string {
  if (!pathes || pathes.length < 2) return "";
  let horizontal = true;

  let nextPath = pathes[0];
  let path = `M${x} ${y}`;
  for (let i = 0; i < pathes.length - 1; i++) {
    const r = Math.min(
      Math.abs(pathes[i]) / 2,
      Math.abs(pathes[i + 1]) / 2,
      radius,
    );
    const d = pathes[i] > 0 === pathes[i + 1] > 0;
    if (horizontal) {
      const dx = pathes[i] > 0 ? r : -r;
      const dy = pathes[i + 1] > 0 ? r : -r;
      path += `l${nextPath - dx} 0a${r} ${r} 0 0 ${d ? 1 : 0} ${dx} ${dy}`;
      nextPath = pathes[i + 1] - dy;
    } else {
      const dx = pathes[i + 1] > 0 ? r : -r;
      const dy = pathes[i] > 0 ? r : -r;
      path += `l0 ${nextPath - dy}a${r} ${r} 0 0 ${d ? 0 : 1} ${dx} ${dy}`;
      nextPath = pathes[i + 1] - dx;
    }
    horizontal = !horizontal;
  }

  if (horizontal) {
    path += `l${pathes[pathes.length - 1]} 0`;
  } else {
    path += `l0 ${pathes[pathes.length - 1]}`;
  }

  return path;
}
