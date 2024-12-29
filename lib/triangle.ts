export class Triangle {
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

  static Isosceles(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x - mx} ${y + height / 3}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

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

  static IsoscelesAlignedLeft(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x} ${y}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

  static IsoscelesAlignedTop(x: number, y: number, bottom: number, height: number): string {
    const mx = bottom / 2;
    return `
      M${x - mx} ${y + height}
      l${bottom} 0
      l${-mx} ${-height}
      Z
    `;
  }

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