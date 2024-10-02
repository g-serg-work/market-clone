import { CSSProperties } from 'react';

export const svgTextToBackgroundImage = (svgText: string): CSSProperties => ({
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svgText)}")`,
});
