export function splitDigitsByThinSpace(value: number): string {
    // == '&thinsp;';
    return value.toString().replace(/\B(?=(?:\d{3})+\b)/g, '\u2009');
}
