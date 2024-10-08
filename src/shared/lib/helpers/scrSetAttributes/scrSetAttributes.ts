export type imageWidth = number;
export type imageHeight = number;

export type scrSetSizesType = Array<[imageWidth, imageHeight]>;

export interface ScrSetAttributesRes {
    src: string;
    srcSet: string;
}

export const scrSetAttributesConfigure = (
    imgUrl: string,
    srcsetSizes: scrSetSizesType,
): ScrSetAttributesRes => {
    const srcSet = srcsetSizes
        .map((en) => `${imgUrl}/${en[0]}x${en[1]} ${en[0]}w`)
        .join(',');

    return {
        src: `${imgUrl}/orig`,
        srcSet,
    };
};
