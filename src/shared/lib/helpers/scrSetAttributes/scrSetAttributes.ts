export interface ScrSetAttributesRes {
    src: string;
    srcSet: string;
}

const scrSetSizes = [
    [120, 160],
    [180, 240],
    [240, 320],
    [300, 400],
    [351, 468],
    [402, 536],
    [450, 600],
    [501, 668],
    [552, 736],
    [600, 800],
];

export type sizeExtend = '' | '_multiply';

export const scrSetAttributesConfigure = (
    imgUrl: string,
    sizeExtend: sizeExtend = '',
): ScrSetAttributesRes => {
    const srcSet = scrSetSizes
        .map((en) => `${imgUrl}/${en[0]}x${en[1]}${sizeExtend} ${en[0]}w`)
        .join(',');

    return {
        src: `${imgUrl}/orig`,
        srcSet,
    };
};
