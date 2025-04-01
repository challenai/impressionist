/**
 * draw an equilateral triangle
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param length the length of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.equilateral(20, 10, 30);
 * ```
 */
export function equilateral(x: number, y: number, length: number): string {
  const h = Math.sin(Math.PI / 3) * length;
  const mx = length / 2;
  return `
    M${x - mx} ${y + h / 3}
    l${length} 0
    l${-mx} ${-h}
    Z
  `;
}

/**
 * draw an isosceles triangle
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param bottom the bottom of the triangle
 *
 * @param height the height of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.isosceles(20, 10, 30, 16);
 * ```
 */
export function isosceles(
  x: number,
  y: number,
  bottom: number,
  height: number,
): string {
  const mx = bottom / 2;
  return `
    M${x - mx} ${y + height / 3}
    l${bottom} 0
    l${-mx} ${-height}
    Z
  `;
}

/**
 * draw an equilateral triangle aligned with left
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param length the length of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.equilateralAlignedLeft(20, 10, 30);
 * ```
 */
export function equilateralAlignedLeft(
  x: number,
  y: number,
  length: number,
): string {
  const h = Math.sin(Math.PI / 3) * length;
  const mx = length / 2;
  return `
    M${x} ${y}
    l${length} 0
    l${-mx} ${-h}
    Z
  `;
}

/**
 * draw an equilateral triangle aligned with top
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param length the length of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.equilateralAlignedTop(20, 10, 30);
 * ```
 */
export function equilateralAlignedTop(
  x: number,
  y: number,
  length: number,
): string {
  const h = Math.sin(Math.PI / 3) * length;
  const mx = length / 2;
  return `
    M${x - mx} ${y + h}
    l${length} 0
    l${-mx} ${-h}
    Z
  `;
}

/**
 * draw an equilateral triangle aligned with right
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param length the length of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.equilateralAlignedRight(20, 10, 30);
 * ```
 */
export function equilateralAlignedRight(
  x: number,
  y: number,
  length: number,
): string {
  const h = Math.sin(Math.PI / 3) * length;
  const mx = length / 2;
  return `
    M${x - length} ${y}
    l${length} 0
    l${-mx} ${-h}
    Z
  `;
}

/**
 * draw an isosceles triangle aligned with left
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param bottom the bottom of the triangle
 *
 * @param height the height of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.isoscelesAlignedLeft(20, 10, 30, 16);
 * ```
 */
export function isoscelesAlignedLeft(
  x: number,
  y: number,
  bottom: number,
  height: number,
): string {
  const mx = bottom / 2;
  return `
    M${x} ${y}
    l${bottom} 0
    l${-mx} ${-height}
    Z
  `;
}

/**
 * draw an isosceles triangle aligned with top
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param bottom the bottom of the triangle
 *
 * @param height the height of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.isoscelesAlignedTop(20, 10, 30, 16);
 * ```
 */
export function isoscelesAlignedTop(
  x: number,
  y: number,
  bottom: number,
  height: number,
): string {
  const mx = bottom / 2;
  return `
    M${x - mx} ${y + height}
    l${bottom} 0
    l${-mx} ${-height}
    Z
  `;
}

/**
 * draw an isosceles triangle aligned with right
 *
 * @param x the position x of the triangle
 *
 * @param y the position y of the triangle
 *
 * @param bottom the bottom of the triangle
 *
 * @param height the height of the triangle
 *
 * **Example Usage**
 *
 * ```jsx
 * const t = triangle.isoscelesAlignedTop(20, 10, 30, 16);
 * ```
 */
export function isoscelesAlignedRight(
  x: number,
  y: number,
  bottom: number,
  height: number,
): string {
  const mx = bottom / 2;
  return `
    M${x - bottom} ${y}
    l${bottom} 0
    l${-mx} ${-height}
    Z
  `;
}
