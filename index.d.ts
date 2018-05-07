export declare const REGEXP_TO_STRING_TAG: string;
export declare function toHex(n: number, toUpperCase?: boolean): string;
/**
 * @code
 * console.log(core.toUnicode('𠮷')); // => \u{20bb7}
 * console.log(core.toUnicode('𠮷'.codePointAt(0)));
 *
 * console.log(core.toUnicode('𠮷', true)); // => \ud842\udfb7
 * console.log(core.toUnicode('𠮷'.codePointAt(0), true));
 *
 * /[𠮷]/u.test('𠮷')
 * /[\u{20bb7}]/u.test('𠮷')
 * /[\ud842\udfb7]/u.test('𠮷')
 */
export declare function toUnicode(charCode: number | string, noMerge?: boolean, wrap?: boolean): string;
export declare function _toUnicode(charCode: number, wrap?: boolean): string;
export declare function isDoubleUnicode(str: string): boolean;
export declare function isRegExp<T extends RegExp>(r: T): T & RegExp;
export declare function isRegExp(r: RegExp): r is RegExp;
export declare function isRegExp(r: any): RegExp | null;
/**
 * @link https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
 * @link https://github.com/ikatyang/regexp-util/blob/7810ce61ff8becd728b745eb6d5c1ca76adfebe0/src/charset.ts#L289
 *
 * @code
 * surrogatePair('𠮷'.codePointAt(0)) // => { h: 55362, l: 57271 }
 * console.log('𠮷'.charCodeAt(0), '𠮷'.charCodeAt(1)) // => 55362 57271
 */
export declare function surrogatePair(codepoint: number): [number, number] & {
    h: number;
    l: number;
};
import * as self from './index';
declare const _default: Readonly<typeof self>;
export default _default;