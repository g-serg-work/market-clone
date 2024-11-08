export function cssRandomColor(letters = '0123456789ABCDEF'): string {
    return `#${Array(6)
        .fill(0)
        .map(() => letters[Math.floor(Math.random() * letters.length)])
        .join('')}`;
}
