/**
 * radius of 4 corners
 */
export interface Radius4 {
  /**
   * tl: top-left
   */
  tl: number;
  /**
   * tr: top-right
   */
  tr: number;
  /**
   * bl: bottom-left
   */
  bl: number;
  /**
   * br: bottom-right
   */
  br: number;
}

/**
 * draw a rectangle
 */
export class Rectangle {
  /**
   * draw a basic rectangle
   * 
   * @param x the position x of the rectangle
   * 
   * @param y the position y of the rectangle
   * 
   * @param width the width of the rectangle
   * 
   * @param height the height of the rectangle
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const rectangle = Rectangle.Basic(300, 300, 200, 100);
   * ```
   */
  static Basic(x: number, y: number, width: number, height: number): string {
    return `
      M${x - width / 2} ${y - height / 2}
      l${width} 0
      l0 ${height}
      l${-width} 0
      Z
    `;
  }

  /**
   * draw a round rectangle
   * 
   * @param x the position x of the rectangle
   * 
   * @param y the position y of the rectangle
   * 
   * @param width the width of the rectangle
   * 
   * @param height the height of the rectangle
   * 
   * @param radius the radius of the rectangle
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const rectangle = Rectangle.Round(300, 300, 200, 100, 20);
   * ```
   */
  static Round(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | Radius4
  ): string {
    if (typeof radius === "number") {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    }
    const maxLen = Math.min(width, height) / 2;

    if (!radius.tl) radius.tl = 0;
    if (!radius.tr) radius.tr = 0;
    if (!radius.bl) radius.bl = 0;
    if (!radius.br) radius.br = 0;

    radius.tl = Math.min(radius.tl, maxLen);
    radius.tr = Math.min(radius.tr, maxLen);
    radius.bl = Math.min(radius.bl, maxLen);
    radius.br = Math.min(radius.br, maxLen);

    return `
      M${x - (width - radius.tl - radius.tr) / 2} ${y - height / 2}
      l${width - radius.tr - radius.tl} 0
      a${radius.tr} ${radius.tr} 0 0 1 ${radius.tr} ${radius.tr}
      l0 ${height - radius.tr - radius.br}
      a${radius.br} ${radius.br} 0 0 1 ${-radius.br} ${radius.br}
      l${radius.bl + radius.br - width} 0
      a${radius.bl} ${radius.bl} 0 0 1 ${-radius.bl} ${-radius.bl}
      l0 ${radius.tl + radius.bl - height}
      a${radius.tl} ${radius.tl} 0 0 1 ${radius.tl} ${-radius.tl}
      Z
    `;
  }

  /**
   * draw a diamond shape
   * 
   * @param x the position x of the diamond
   * 
   * @param y the position y of the diamond
   * 
   * @param width the width of the diamond
   * 
   * @param height the height of the diamond
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const diamond = Rectangle.Diamond(300, 300, 200, 100);
   * ```
   */
  static Diamond(x: number, y: number, width: number, height: number): string {
    const rx = width / 2;
    const ry = height / 2;
    return `
      M${x - rx} ${y}
      l${rx} ${ry}
      l${rx} ${-ry}
      l${-rx} ${-ry}
      Z
    `;
  }

  /**
   * draw a parallelogram shape
   * 
   * @param x the position x of the parallelogram
   * 
   * @param y the position y of the parallelogram
   * 
   * @param width the width of the parallelogram
   * 
   * @param height the height of the parallelogram
   * 
   * @param offset the offset of the parallelogram
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const parallelogram = Rectangle.Parallelogram(300, 300, 200, 100, 30);
   * ```
   */
  static Parallelogram(x: number, y: number, width: number, height: number, offset: number): string {
    const mx = (width + Math.abs(offset)) / 2;
    return `
      M${x - mx} ${y - height / 2}
      l${width} 0
      l${offset} ${height}
      l${-width} 0
      Z
    `;
  }

  /**
   * draw a basic rectangle aligned with top-left
   * 
   * @param x the position x of the rectangle
   * 
   * @param y the position y of the rectangle
   * 
   * @param width the width of the rectangle
   * 
   * @param height the height of the rectangle
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const rectangle = Rectangle.BasicAligned(300, 300, 200, 100);
   * ```
   */
  static BasicAligned(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Basic(x + width / 2, y + height / 2, width, height);
  }

  /**
   * draw a round rectangle aligned with top-left
   * 
   * @param x the position x of the rectangle
   * 
   * @param y the position y of the rectangle
   * 
   * @param width the width of the rectangle
   * 
   * @param height the height of the rectangle
   * 
   * @param radius the radius of the rectangle
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const rectangle = Rectangle.RoundAligned(300, 300, 200, 100, 20);
   * ```
   */
  static RoundAligned(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | Radius4
  ): string {
    return this.Round(x + width / 2, y + height / 2, width, height, radius);
  }

  /**
   * draw a diamond shape aligned with top
   * 
   * @param x the position x of the diamond
   * 
   * @param y the position y of the diamond
   * 
   * @param width the width of the diamond
   * 
   * @param height the height of the diamond
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const diamond = Rectangle.DiamondAlignedTop(300, 300, 200, 100);
   * ```
   */
  static DiamondAlignedTop(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Diamond(x, y + height / 2, width, height);
  }

  /**
   * draw a diamond shape aligned with left
   * 
   * @param x the position x of the diamond
   * 
   * @param y the position y of the diamond
   * 
   * @param width the width of the diamond
   * 
   * @param height the height of the diamond
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const diamond = Rectangle.DiamondAlignedLeft(300, 300, 200, 100);
   * ```
   */
  static DiamondAlignedLeft(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Diamond(x + width / 2, y, width, height);
  }

  /**
   * draw a parallelogram shape aligned with top-left
   * 
   * @param x the position x of the parallelogram
   * 
   * @param y the position y of the parallelogram
   * 
   * @param width the width of the parallelogram
   * 
   * @param height the height of the parallelogram
   * 
   * @param offset the offset of the parallelogram
   * 
   * **Example Usage**
   * 
   * ```jsx
   * const parallelogram = Rectangle.ParallelogramAligned(300, 300, 200, 100, 30);
   * ```
   */
  static ParallelogramAligned(x: number, y: number, width: number, height: number, offset: number): string {
    if (offset < 0) {
      return this.Parallelogram(x + width / 2 - offset / 2, y + height / 2, width, height, offset);
    }
    return this.Parallelogram(x + width / 2 + offset / 2, y + height / 2, width, height, offset);
  }
}
