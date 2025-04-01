/**
 * draw a sector by the given radians
 *
 * @param x the position x of the sector
 *
 * @param y the position y of the sector
 *
 * @param radius0 the inner radius of the sector
 *
 * @param radius1 the outer radius of the sector
 *
 * @param start the start radian of the sector
 *
 * @param end the end radian of the sector
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = circular.sectorRadians(0, 0, 64, 96, Math.PI, 1.5 * Math.PI);
 * ```
 */
export function sectorRadians(
  x: number,
  y: number,
  radius0: number,
  radius1: number,
  start: number,
  end: number,
): string {
  if (radius0 <= 0 || radius0 >= radius1) {
    return "";
  }

  const larger = Math.abs(start - end) % (2 * Math.PI) > Math.PI ? 1 : 0;
  const startRX = Math.cos(start);
  const startRY = Math.sin(start);
  const endRX = Math.cos(end);
  const endRY = Math.sin(end);
  return `
    M${x + startRX * radius0} ${y - startRY * radius0}
    A${radius0} ${radius0} 0 ${larger} ${start > end ? 1 : 0} ${x + endRX * radius0} ${y - endRY * radius0}
    L${x + endRX * radius1} ${y - endRY * radius1}
    A${radius1} ${radius1} 0 ${larger} ${start > end ? 0 : 1} ${x + startRX * radius1} ${y - startRY * radius1}
    Z
  `;
}

/**
 * draw a sector by the given degrees
 *
 * @param x the position x of the sector
 *
 * @param y the position y of the sector
 *
 * @param radius0 the inner radius of the sector
 *
 * @param radius1 the outer radius of the sector
 *
 * @param start the start degree of the sector
 *
 * @param end the end degree of the sector
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = circular.sector(0, 0, 64, 96, 60, 120);
 * ```
 */
export function sector(
  x: number,
  y: number,
  radius0: number,
  radius1: number,
  start: number,
  end: number,
): string {
  const ratio = Math.PI / 180;
  return sectorRadians(x, y, radius0, radius1, start * ratio, end * ratio);
}

/**
 * draw a pie by the given radians
 *
 * @param x the position x of the pie
 *
 * @param y the position y of the pie
 *
 * @param radius the radius of the pie
 *
 * @param start the start radian of the pie
 *
 * @param end the end radian of the pie
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = circular.pie(0, 0, 72, 0.15 * Math.Pi, 0.5 * Math.PI);
 * ```
 */
export function pieRadians(
  x: number,
  y: number,
  radius: number,
  start: number,
  end: number,
): string {
  if (radius <= 0) {
    return "";
  }

  const clockwise = start > end ? 1 : 0;
  const larger = Math.abs(start - end) % (2 * Math.PI) > Math.PI ? 1 : 0;
  const startRadians = start;
  const endRadians = end;
  const startX = Math.cos(startRadians) * radius;
  const startY = Math.sin(startRadians) * radius;
  const endX = Math.cos(endRadians) * radius;
  const endY = Math.sin(endRadians) * radius;
  return `M${x} ${y}L${x + startX} ${y - startY}A${radius} ${radius} 0 ${larger} ${clockwise} ${x + endX} ${y - endY}Z`;
}

/**
 * draw a pie by the given degrees
 *
 * @param x the position x of the pie
 *
 * @param y the position y of the pie
 *
 * @param radius the radius of the pie
 *
 * @param start the start degree of the pie
 *
 * @param end the end degree of the pie
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = circular.pie(0, 0, 72, 30, 60);
 * ```
 */
export function pie(
  x: number,
  y: number,
  radius: number,
  start: number,
  end: number,
): string {
  const ratio = Math.PI / 180;
  return pieRadians(x, y, radius, start * ratio, end * ratio);
}
