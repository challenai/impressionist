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
 * const r = rectangle.basic(300, 300, 200, 100);
 * ```
 */
export function basic(
	x: number,
	y: number,
	width: number,
	height: number,
): string {
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
 * const r = rectangle.round(300, 300, 200, 100, 20);
 * ```
 */
export function round(
	x: number,
	y: number,
	width: number,
	height: number,
	radius: number | Radius4,
): string {
	if (typeof radius === "number") {
		// biome-ignore lint/style/noParameterAssign: off
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
    M${x - width / 2 + radius.tl} ${y - height / 2}
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
 * const d = rectangle.diamond(300, 300, 200, 100);
 * ```
 */
export function diamond(
	x: number,
	y: number,
	width: number,
	height: number,
): string {
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
 * const p = rectangle.parallelogram(300, 300, 200, 100, 30);
 * ```
 */
export function parallelogram(
	x: number,
	y: number,
	width: number,
	height: number,
	offset: number,
): string {
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
 * const r = rectangle.basicAligned(300, 300, 200, 100);
 * ```
 */
export function basicAligned(
	x: number,
	y: number,
	width: number,
	height: number,
): string {
	return basic(x + width / 2, y + height / 2, width, height);
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
 * const r = rectangle.roundAligned(300, 300, 200, 100, 20);
 * ```
 */
export function roundAligned(
	x: number,
	y: number,
	width: number,
	height: number,
	radius: number | Radius4,
): string {
	return round(x + width / 2, y + height / 2, width, height, radius);
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
 * const d = rectangle.diamondAlignedTop(300, 300, 200, 100);
 * ```
 */
export function diamondAlignedTop(
	x: number,
	y: number,
	width: number,
	height: number,
): string {
	return diamond(x, y + height / 2, width, height);
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
 * const d = rectangle.diamondAlignedLeft(300, 300, 200, 100);
 * ```
 */
export function diamondAlignedLeft(
	x: number,
	y: number,
	width: number,
	height: number,
): string {
	return diamond(x + width / 2, y, width, height);
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
 * const p = rectangle.parallelogramAligned(300, 300, 200, 100, 30);
 * ```
 */
export function parallelogramAligned(
	x: number,
	y: number,
	width: number,
	height: number,
	offset: number,
): string {
	if (offset < 0) {
		return parallelogram(
			x + width / 2 - offset / 2,
			y + height / 2,
			width,
			height,
			offset,
		);
	}
	return parallelogram(
		x + width / 2 + offset / 2,
		y + height / 2,
		width,
		height,
		offset,
	);
}
