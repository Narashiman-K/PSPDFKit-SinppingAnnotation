import React from 'react';

/**
 * Throws an error if the condition is falsy. This is used to check for
 * impossible conditions, such as unreachable code or invalid inputs. This is
 * also used to narrow types in TypeScript. For example:
 *
 * ```ts
 * function example(value: string | number) {
 *   invariant(typeof value === "string");
 *   // value is now a string
 *   value.split("");
 *   // ...
 * }
 * ```
 *
 * @param condition The condition to check
 * @param message The message to throw if the condition is falsy
 */
declare function invariant(condition: unknown, message?: string): asserts condition;

/**
 * This utility function is used to create a class name string from the given
 * arguments. It supports strings, undefined, null, boolean and objects. If an
 * object is passed, the keys will be used as class names and the values will be
 * used as a boolean to determine if the class name should be included.
 *
 * Example:
 *
 * ```js
 * classNames("foo", "bar", { baz: true, qux: false }); // "foo bar baz"
 * classNames(null, undefined, false, "foo", { bar: true }); // "foo bar"
 * classNames(["foo", { bar: true }]); // "foo bar"
 * ```
 *
 * @param args
 */
declare function classNames(...args: any[]): string;

/**
 * Returns the HTMLElement from a string selector, HTMLElement, or React
 * RefObject.
 *
 * @param element - A string selector, HTMLElement, or React RefObject.
 * @param ownerDocument - The document to use for the querySelector call.
 * @returns The HTMLElement or null if not found.
 */
declare function getHTMLElement(element: string | HTMLElement | React.RefObject<HTMLElement> | null | undefined, ownerDocument: Document): HTMLElement | null | undefined;
interface FontProperties {
    fontSize: number;
    fontFamily?: string;
    fontWeight?: string;
    fontStyle?: string;
}
/**
 * Returns the width and height of the text with the given font properties.
 *
 * ```ts
 * const { width, height } = getTextDimensions({
 *   text: "Hello world!",
 *   fontSize: 16,
 *   fontFamily: "Arial",
 *   fontWeight: "normal",
 *   fontStyle: "normal",
 * });
 * ```
 *
 * @param text - The text to measure.
 * @param fontSize - The font size in pixels.
 * @param fontFamily - The font family. Defaults to Arial.
 * @param fontWeight - The font weight. Defaults to normal.
 * @param fontStyle - The font style. Defaults to normal.
 */
declare function getTextDimensions({ text, fontSize, fontFamily, fontWeight, fontStyle, }: {
    text: string;
} & FontProperties): {
    width: number;
    height: number;
};
/**
 * Returns the font size that will fit the given text within the given width.
 * The font size is calculated by starting with the initial font size and
 * decreasing it until the text fits within the desired width.
 *
 * ```ts
 * const fontSize = calculateFontSizeToFitWidth({
 *   text: "Hello world!",
 *   maxWidth: 100,
 *   initialFontSize: 16,
 *   fontFamily: "Arial",
 *   fontWeight: "normal",
 *   fontStyle: "normal",
 * });
 * ```
 *
 * @param text - The text to measure.
 * @param maxWidth - The maximum width in pixels.
 * @param initialFontSize - The initial font size in pixels. Defaults to 50.
 * @param fontFamily - The font family. Defaults to Arial.
 * @param fontWeight - The font weight. Defaults to normal.
 * @param fontStyle - The font style. Defaults to normal.
 */
declare function calculateFontSizeToFitWidth({ text, maxWidth, initialFontSize, fontFamily, fontWeight, fontStyle, }: {
    text: string;
    maxWidth: number;
    initialFontSize: number;
} & Omit<FontProperties, "fontSize">): number;

/**
 * This function takes a list of [x, y] coordinates representing a stroke and
 * returns an SVG path string.
 *
 * @example
 *   ```ts
 *   const stroke = [[0, 0], [1, 1], [2, 2]];
 *   const path = getSvgPathFromStroke(stroke);
 *   // path === "M0,0Q0.5,0.5,1,1Q1.5,1.5,2,2Z"
 *   ```;
 *
 * @param stroke The stroke to convert to an SVG path
 */
declare function getSvgPathFromStroke(stroke: number[][]): string;

declare function cleanKeyFromGlobImport(modules: Record<string, Record<string, string>>): Record<string, Record<string, string>>;

/**
 * This function filters out falsy values from an object.
 *
 * @template T - A type that extends Record<string, unknown>.
 * @param {T} obj - The object to filter.
 * @returns {Partial<T>} - A new object that only includes the truthy values
 *   from the original object.
 */
declare function filterTruthyValues<T extends Record<string, unknown>>(obj: T): Partial<T>;

/**
 * Lightens a color by a percentage.
 *
 * ```ts
 * lightenColor("#000000", 10); // #1a1a1a
 * ```
 *
 * @param color
 * @param percent
 */
declare function lightenColor(color: string, percent: number): string;

/**
 * Checks whether the given value is a valid URL.
 *
 * ```ts
 * isUrl("https://example.com"); // true
 * isUrl("example.com"); // false
 * ```
 *
 * @param {string} value - The value to be checked.
 * @param {boolean} lenient - Whether to be lenient when checking the URL.
 * @returns {boolean} - True if the value is a valid URL, false otherwise.
 */
declare function isUrl(value: string, lenient?: boolean): boolean;

export { calculateFontSizeToFitWidth, classNames, cleanKeyFromGlobImport, filterTruthyValues, getHTMLElement, getSvgPathFromStroke, getTextDimensions, invariant, isUrl, lightenColor };
