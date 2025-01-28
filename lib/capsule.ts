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
 * const capsule = Capsule.Row(0, 10, 80, 30);
 * ```
 */
export function row(x: number, y: number, width: number, height: number): string {
  if (width < height) return "";

  const radius = height / 2;
  return `
      M${x - radius} ${y - radius}
      l${width - height} 0
      a${radius} ${radius} 0 0 1 0 ${height}
      l${height - width} 0
      a${radius} ${radius} 0 0 1 0 ${-height}
    `;
}
