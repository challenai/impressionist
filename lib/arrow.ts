/**
 * draw a vee arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param low the low height of the arrow
 * 
 * @param high the high height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const a = arrow.vee(0, 0, 16, -6, 12);
 * ```
 */
export function vee(x: number, y: number, width: number, low: number, high: number): string {
  if (width <= 0 || low >= high || high <= 0) {
    return "";
  }

  const r = width / 2;
  return `M${x} ${y}l${-r} ${-low}l${r} ${low - high}l${r} ${high - low}Z`;
}

/**
 * draw a basic arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param height the height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const a = arrow.basic(0, 0, 16, 20);
 * ```
 */
export function basic(x: number, y: number, width: number, height: number): string {
  if (width <= 0 || height <= 0) {
    return "";
  }

  const r = width / 2;
  return `M${x - r} ${y + height}l${r} ${-height}l${r} ${height}`;
}

/**
 * draw a triangle arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param height the height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const a = arrow.triangle(0, 0, 16, 20);
 * ```
 */
export function triangle(x: number, y: number, width: number, height: number): string {
  if (width <= 0 || height <= 0) {
    return "";
  }

  const r = width / 2;
  return `M${x - r} ${y}l${width} 0l${-r} ${-height}Z`;
}

/**
 * draw a blunt arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param low the low height of the arrow
 * 
 * @param high the high height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const arrow = arrow.blunt(0, 0, 16, 12, 24);
 * ```
 */
export function blunt(x: number, y: number, width: number, low: number, high: number): string {
  if (width <= 0 || low <= 0 || low >= high) {
    return "";
  }

  const r = width / 2;
  return `M${x - r} ${y}l0 ${-low}l${r} ${low - high}l${r} ${high - low}l0 ${low}Z`;
}

/**
 * draw a dome arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param low the lower height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const arrow = arrow.dome(0, 0, 16, 12);
 * ```
 */
export function dome(x: number, y: number, width: number, low: number): string {
  if (width <= 0 || low <= 0) {
    return "";
  }

  const r = width / 2;
  return `M${x - r} ${y}l0 ${-low}a${r} ${r} 0 0 1 ${width} 0l0 ${low}Z`;
}

/**
 * draw a bullet arrow
 * 
 * @param x the position x of the arrow
 * 
 * @param y the position y of the arrow
 * 
 * @param width the width of the arrow
 * 
 * @param height the height of the arrow
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const arrow = arrow.bullet(0, 0, 12, 18);
 * ```
 */
export function bullet(x: number, y: number, width: number, height: number): string {
  if (width <= 0 || height <= 0) {
    return "";
  }

  const r = width / 2;
  return `M${x - r} ${y}a${r} ${height} 0 0 1 ${width} 0Z`;
}