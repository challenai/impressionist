export interface Point {
	x: number;
	y: number;
}

/**
 * draw a basic quadratic bezier curve with control point (cx, cy)
 *
 * @param x0 the start point x of the curve
 *
 * @param y0 the start point y of the curve
 *
 * @param x1 the end point x of the curve
 *
 * @param y1 the end point y of the curve
 *
 * @param controlPointX the control point x of the curve
 *
 * @param controlPointY the control point y of the curve
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.quadraticBasic(20, 10, 30, 50, 25, 50);
 * ```
 */
export function quadraticBasic(
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	controlPointX: number,
	controlPointY: number,
): string {
	return `M${x0} ${y0}Q${controlPointX} ${controlPointY},${x1} ${y1}`;
}

/**
 * draw a basic quadratic bezier curve with control point (cx, cy)
 *
 * @param x0 the start point x of the curve
 *
 * @param y0 the start point y of the curve
 *
 * @param x1 the end point x of the curve
 *
 * @param y1 the end point y of the curve
 *
 * @param controlPointX0 the first control point x of the curve
 *
 * @param controlPointY0 the first control point y of the curve
 *
 * @param controlPointX1 the second control point x of the curve
 *
 * @param controlPointY1 the second control point y of the curve
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.cubicBasic(20, 10, 30, 50, 30, 45, 25, 50);
 * ```
 */
export function cubicBasic(
	x: number,
	y: number,
	x1: number,
	y1: number,
	controlPointX0: number,
	controlPointY0: number,
	controlPointX1: number,
	controlPointY1: number,
): string {
	return `M${x} ${y}C${controlPointX0} ${controlPointY0},${controlPointX1} ${controlPointY1},${x1} ${y1}`;
}

/**
 * draw a quadratic bezier curve
 *
 * @param points the points' array of the fold line
 *
 * points format: [p0], [c1, p1], [p2], [p3] ...
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.quadratic([
 *   {x: 120, y: 30},  // p0
 *   {x: 80, y: 100},  // c1
 *   {x: 70, y: 180},  // p1
 * ]);
 * ```
 */
export function quadratic(points: Point[]): string {
	if (points.length < 3) return "";
	let p = `M${points[0].x} ${points[0].y}Q${points[1].x} ${points[1].y},${points[2].x} ${points[2].y}`;
	let e: Point;
	for (let i = 3; i < points.length; i++) {
		e = points[i];
		p += `T${e.x} ${e.y}`;
	}
	return p;
}

/**
 * draw a quadratic bezier curve
 *
 * @param points the points' array of the fold line
 *
 * points format: [p0], [c1, p1], [p2], [p3] ...
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.quadratic2([
 *   [120, 30],  // p0
 *   [80, 100],  // c1
 *   [70, 180],  // p1
 * ]);
 * ```
 */
export function quadratic2(points: number[][]): string {
	const points_ = points.map((p: number[]) => ({ x: p[0], y: p[1] }));
	return quadratic(points_);
}

/**
 * draw a cubic bezier curve
 *
 * @param points the points' array of the fold line
 *
 * points format: [p0], [c1, c2, p1], [c3, p2], [c4, p3] ...
 *
 * p: point
 *
 * c: control point
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.cubic([
 *   {x: 120, y: 30},  // p0
 *   {x: 80, y: 100},  // c1
 *   {x: 70, y: 180},  // c2
 *   {x: 170, y: 280}, // p1
 * ]);
 * ```
 */
export function cubic(points: Point[]): string {
	if (points.length < 4) return "";
	let p = `M${points[0].x} ${points[0].y}C${points[1].x} ${points[1].y},${points[2].x} ${points[2].y},${points[3].x} ${points[3].y}`;
	let c2: Point;
	let e: Point;
	for (let i = 4; i + 1 < points.length; i += 2) {
		c2 = points[i];
		e = points[i + 1];
		p += `S${c2.x} ${c2.y},${e.x} ${e.y}`;
	}
	return p;
}

/**
 * draw a cubic bezier curve
 *
 * @param points the points' array of the fold line
 *
 * points format: [p0], [c1, c2, p1], [c3, p2], [c4, p3] ...
 *
 * p: point
 *
 * c: control point
 *
 * **Example Usage**
 *
 * ```jsx
 * const c = bezier.cubic2([
 *   [120, 30],  // p0
 *   [80, 100],  // c1
 *   [70, 180],  // c2
 *   [170, 280], // p1
 * ]);
 * ```
 */
export function cubic2(points: number[][]): string {
	const points_ = points.map((p: number[]) => ({ x: p[0], y: p[1] }));
	return cubic(points_);
}
