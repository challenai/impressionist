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
