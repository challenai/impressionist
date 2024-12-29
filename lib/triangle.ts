export class Triangle {
  // draw an equilateral triangle
  static Equilateral(x: number, y: number, length: number): string {
    const h = Math.sin(Math.PI / 3) * length;
    const mx = length / 2;
    return `
      M${x - mx} ${y + h / 3}
      l${length} 0
      l${-mx} ${-h}
      Z
    `;
  }

  // draw an isosceles triangle
  static Isosceles(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x - mx} ${y + height / 3}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

  // draw an equilateral triangle aligned with left
  static EquilateralAlignedLeft(x: number, y: number, length: number): string {
    const h = Math.sin(Math.PI / 3) * length;
    const mx = length / 2;
    return `
      M${x} ${y}
      l${length} 0
      l${-mx} ${-h}
      Z
    `;
  }

  // draw an equilateral triangle aligned with top
  static EquilateralAlignedTop(x: number, y: number, length: number): string {
    const h = Math.sin(Math.PI / 3) * length;
    const mx = length / 2;
    return `
      M${x - mx} ${y + h}
      l${length} 0
      l${-mx} ${-h}
      Z
    `;
  }

  // draw an equilateral triangle aligned with right
  static EquilateralAlignedRight(x: number, y: number, length: number): string {
    const h = Math.sin(Math.PI / 3) * length;
    const mx = length / 2;
    return `
      M${x - length} ${y}
      l${length} 0
      l${-mx} ${-h}
      Z
    `;
  }

  // draw an isosceles triangle aligned with left
  static IsoscelesAlignedLeft(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x} ${y}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

  // draw an isosceles triangle aligned with top
  static IsoscelesAlignedTop(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x - mx} ${y + height}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

  // draw an isosceles triangle aligned with right
  static IsoscelesAlignedRight(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x - bottom} ${y}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }
}