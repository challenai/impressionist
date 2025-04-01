/**
 * draw a row capsule
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 80, 30);
 * ```
 */
export function row(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  if (width < height) return "";

  const radius = height / 2;
  return `
    M${x - width / 2 + radius} ${y - radius}
    l${width - height} 0
    a${radius} ${radius} 0 0 1 0 ${height}
    l${height - width} 0
    a${radius} ${radius} 0 0 1 0 ${-height}
    Z
  `;
}

/**
 * draw a col capsule
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 30, 80);
 * ```
 */
export function col(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  if (height < width) return "";

  const radius = width / 2;
  return `
    M${x - radius} ${y - height / 2 + radius}
    a${radius} ${radius} 0 0 1 ${width} 0
    l${height - width} 0
    a${radius} ${radius} 0 0 1 ${-width} 0
    Z
  `;
}

/**
 * draw a row capsule
 *
 * the center of the popup is aligned with top left.
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 80, 30);
 * ```
 */
export function rowAligned(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  return row(x + width / 2, y + height / 2, width, height);
}

/**
 * draw a col capsule
 *
 * the center of the popup is aligned with top left.
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 30, 80);
 * ```
 */
export function colAligned(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  return col(x + width / 2, y + height / 2, width, height);
}

/**
 * draw a capsule with given width and height
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 80, 30);
 * ```
 */
export function auto(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  return width > height ? row(x, y, width, height) : col(x, y, width, height);
}

/**
 * draw a capsule with given width and height
 *
 * the center of the popup is aligned with top left.
 *
 * @param x the position x of the capsule
 *
 * @param y the position y of the capsule
 *
 * @param width the width of the capsule
 *
 * @param height the height of the capsule
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = capsule.row(0, 10, 80, 30);
 * ```
 */
export function autoAligned(
  x: number,
  y: number,
  width: number,
  height: number,
): string {
  const x_ = x + width / 2;
  const y_ = y + height / 2;
  return width > height
    ? row(x_, y_, width, height)
    : col(x_, y_, width, height);
}
