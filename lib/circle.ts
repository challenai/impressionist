export class Circle {
  static Basic(x: number, y: number, radius: number): string {
    return `
      M${x + radius} ${y}
      a${radius} ${radius} 0 1 0 ${-radius * 2} 0
      a${radius} ${radius} 0 1 0 ${radius * 2} 0
    `;
  }

  static BasicAlignedLeft(x: number, y: number, radius: number): string {
    return this.Basic(x + radius, y, radius);
  }

  static BasicAlignedTop(x: number, y: number, radius: number): string {
    return this.Basic(x, y + radius, radius);
  }
}
