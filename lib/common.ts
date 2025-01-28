/**
 * draw a plus shape
 * 
 * @param x the position x of the plus shape
 * 
 * @param y the position y of the plus shape
 * 
 * @param size the size of the plus shape
 * 
 * @param thickness the thickness of the plus shape
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const p = common.plus(0, 0, 48, 16);
 * ```
 */
export function plus(x: number, y: number, size: number, thickness: number): string {
  if (thickness <= 0 || size <= thickness) {
    return "";
  }

  const mw = thickness / 2;
  const ew = size / 2;
  const delta = ew - mw;

  return `M${x - ew} ${y - mw}l${delta} 0l0 ${-delta}l${thickness} 0l0 ${delta}l${delta} 0l0 ${thickness}l${-delta} 0l0 ${delta}l${-thickness} 0l0 ${-delta}l${-delta} 0Z`;
}

/**
 * draw a popup
 * 
 * the center of the popup is aligned with bottom of triangle.
 * 
 * @param x the position x of the popup
 * 
 * @param y the position y of the popup
 * 
 * @param width the width of the popup
 * 
 * @param height the height of the popup
 * 
 * @param triangleWidth the bottom triangle width of the popup
 * 
 * @param triangleHeight the bottom triangle height of the popup
 * 
 * **Example Usage**
 * 
 * ```jsx
 * const p = common.popup(0, 0, 120, 75, 9, 18, 10);
 * ```
 */
export function popup(x: number, y: number, width: number, height: number, radius: number, triangleWidth: number, triangleHeight: number): string {
  if (width <= 0 || height <= 0 || triangleWidth >= width) {
    return "";
  }

  const twr = triangleWidth / 2;
  return `
      M${x - width / 2 + radius} ${y - triangleHeight - height}
      l${width - radius - radius} 0
      a${radius} ${radius} 0 0 1 ${radius} ${radius}
      l0 ${height - radius - radius}
      a${radius} ${radius} 0 0 1 ${-radius} ${radius}
      l${(radius + radius - width) / 2 + twr} 0
      l${-twr} ${triangleHeight}
      l${-twr} ${-triangleHeight}
      l${(radius + radius - width) / 2 + twr} 0
      a${radius} ${radius} 0 0 1 ${-radius} ${-radius}
      l0 ${radius + radius - height}
      a${radius} ${radius} 0 0 1 ${radius} ${-radius}
    `;
}