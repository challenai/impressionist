export interface Radius4 {
  tl: number;
  tr: number;
  bl: number;
  br: number;
}

export class Rectangle {
  static Basic(x: number, y: number, width: number, height: number): string {
    return `
      M${x - width / 2} ${y - height / 2}
      l${width} 0
      l0 ${height}
      l${-width} 0
      Z
    `;
  }

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

  static BasicAligned(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Basic(x + width / 2, y + height / 2, width, height);
  }

  static RoundAligned(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | Radius4
  ): string {
    return this.Round(x + width / 2, y + height / 2, width, height, radius);
  }

  static DiamondAlignedTop(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Diamond(x, y + height / 2, width, height);
  }

  static DiamondAlignedLeft(
    x: number,
    y: number,
    width: number,
    height: number,
  ): string {
    return this.Diamond(x + width / 2, y, width, height);
  }

  static ParallelogramAligned(x: number, y: number, width: number, height: number, offset: number): string {
    if (offset < 0) {
      return this.Parallelogram(x + width / 2 - offset / 2, y + height / 2, width, height, offset);
    }
    return this.Parallelogram(x + width / 2 + offset / 2, y + height / 2, width, height, offset);
  }
}
